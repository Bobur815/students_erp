import http from "http"
let PORT=1234
let products=[
    {
        id:1,
        name:"Smartphone",
        price:299.99,
        description:"A modern smartphone with 128GB storage"
    },
    {
        id:2,
        name:"Laptop",
        price:799,
        description:"Unbelievably thin. Incredibly powerful"
    },
    {
        id:3,
        name:"Headphone",
        price:149.99,
        description:"Wireless noise-cancelling headphones"
    }
]

let server=http.createServer((req,res)=>{
    if (req.method==='GET'&&req.url==='/products') {
        res.writeHead(200,{'Content-Type':'application/json'})
        res.end(JSON.stringify(products))
    }
    else{
        res.writeHead(404,{'Content-Type':'text/plain'})
        res.end('Not found')
    }
})

server.listen(PORT,()=>{
    console.log(`Server http://localhost:${PORT} manzilda ishga tushdi`);
})

