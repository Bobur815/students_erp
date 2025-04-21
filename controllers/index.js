import fs from "fs"
import path from "path"

const GET  = (req,res) => {
    
}
const POST  = (req,res) => {
    let newUser = req.body;
    let users = JSON.parse(fs.readFileSync(path.join(process.cwd(),"/db/users.json"),"utf-8"))
    let obj = {
        id: users.length ? users.at(-1).id + 1 : 1,
        ...newUser
    }

    users.push(obj)
    fs.writeFileSync(path.join(process.cwd(),"/db/users.json"),JSON.stringify(users,null,4))
    res.status(201).json({message: "New user created!"})

}
const PUT = (req,res) => {

}

const DELETE = (req,res) => {

}

export default{
    GET,
    POST,
    PUT,
    DELETE
}