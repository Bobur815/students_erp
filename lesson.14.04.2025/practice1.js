import http from "http"
let PORT = 8000
let users=[
    {
        name:"Ali",
        age:12
    },
    {
        name:"Vali",
        age:24
    }
]

let server=http.createServer((request,response)=>{
    if (request.url=="/users"&&request.method=="GET") {
        response.setHeader("Content-Type","application/json")
        response.write(JSON.stringify(users))
        response.end()
    }
    else{
        response.write("Welcome to the site")
        response.end()
    }
})

server.listen(PORT,()=>console.log("server is running"));