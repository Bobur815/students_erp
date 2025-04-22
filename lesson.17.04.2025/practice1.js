import express from "express"
import path from "path"
const PORT=process.env.PORT || 4545
let server=express()

server.use(express.json())
server.all("/",(req,res)=>{
    if (req.method=="GET") {
        res.send("GET")
    }

    else if (req.method=="POST") {
        res.send("POST")
    }

    else if (req.method=="PUT") {
        res.send("PUT")
    }

    else if (req.method=="DELETE") {
        res.send("DELETE")
    }
})