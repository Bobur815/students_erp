const express=require('express')
const app=express()
app.use(express.json())

let users=[]
let id=1

app.post('/users',(req,res)=>{
    const user={id:id++,...req.body}
    users.push(user)
    res.status(201).json(user)
})

app.get('/users',(req,res)=>{
    res.json(users)
})

app.get('/users/:id',(req,res)=>{
    const user=users.find(u=>u.id===parseInt(req.params.id))
    if (!user) return res.status(404).send('User not found')
    res.json(user)
})

app.put('/usres/:id',(req,res)=>{
    const user=users.find(u=>u.id===parseInt(req.params.id))
    if (!user) return res.status(404).send('User not found')
    user.name=req.body.name
    user.email=req.body.email
    res.json(user)
})

app.delete('users/:id',(req,res)=>{
    users.users.filter(u=>u.id!==parseInt(req.params.id))
    res.status(204).send()
})

app.listen(3000,()=>console.log('Server running on port 3000'))