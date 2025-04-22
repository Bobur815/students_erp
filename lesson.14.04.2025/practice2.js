import http from "http"
let PORT=3638
let server=http.createServer((req,res)=>{
    res.statusCode=200
    res.setHeader('Content-Type','text/plain')
    res.end('Salom, bu mening birinchi HTTP serverim')
})

server.listen(PORT, ()=>{
    console.log(`Server http://localhost:${PORT} manzilida ishga tushdi`);    
})