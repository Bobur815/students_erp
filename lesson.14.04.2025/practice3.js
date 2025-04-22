import http from "http"
let PORT=3000
let server=http.createServer((req,res)=>{
    let message=''
    let statusCode=200

    switch (req.url) {
        case '/':
            message="Bo'sh sahifa" 
            break;
        case '/haqida':
            message="Bizning kompaniyaniz haqida ma'lumot" 
            break;
        case '/aloqa':
            message="Biz bilan bog'lanish uchun: example@gmail.com" 
            break;
        default:
            message='404 - Sahifa topilmadi'
            statusCode=404
    }
    res.statusCode=statusCode
    res.setHeader('Content-Type', 'text/plain')
    res.end(message)
})

server.listen(PORT,()=>{
    console.log(`Server http://localhost:${PORT} manzilida ishga tushdi`);    
})