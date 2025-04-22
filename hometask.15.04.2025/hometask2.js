const express=require('express')
const app=express()
app.use(express.json())

let posts=[]
let postId=1

app.post('/posts',(req,res)=>{
    const post={
        id:postId++,
        title:req.body.title,
        body:req.body.body
    }
    posts.push(post)
    res.status(201).json(post)
})

app.get('/posts',(req,res)=>{
    res.json(posts)
})

app.get('/posts/:id',(req,res)=>{
    const post=posts.find(p=>p.id===parseInt(req.params.id))
    if (!post) return res.status(404).send('Post not found')
    res.json(post)
})

app.put('/posts/:id',(req,res)=>{
    const post=posts.find(p=>p.id===parseInt(req.params.id))
    if (!post) return res.status(404).send('Post not found')
    post.title=req.body.title
    post.body=req.body.body
    res.json(post)
})

app.delete('/posts/:id',(req,res)=>{
    posts=posts.filter(p=>p.id!==parseInt(req.params.id))
    res.status(204).send()
})

app.listen(3000,()=>console.log('Seerver running on port 3000'))