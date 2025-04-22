import http from "http"
let PORT = 2025
let server=http.createServer((req,res)=>{
    let message=''
    let statusCode=200

    if (req.url==='/users') {
        switch  (req.method) {
            case 'GET':
                message="Foydalanuvchilar ro'yxati olinmoqda"
                break;
            case 'POST':
                message="Yangi foydalanuvchi qo'shilmoqda"
                break;
            case 'PUT':
                message="Foydalanuvchi ma'lumotlari yangilanmoqda"
                break;
            default:
                statusCode=405
                message="Ruxsat etilmagan metod"
        }
    } else{
        statusCode=404
        message="Noto'g'ri yo'nalish"
    }

    res.statusCode=statusCode
    res.setHeader('Content-Type', 'text/plain')
    res.end(message)
})

server.listen(PORT, ()=>{
    console.log(`Server http://localhost:${PORT} manzilida ishga tushdi`);
})