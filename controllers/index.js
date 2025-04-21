import fs from "fs"
import path from "path"

const GET = (req, res) => {
    res.send("get users")
}

const USER_POST = (req, res) => {
    const users = req.body

}
const REGISTER_POST = (req, res) => {
    const newUser = req.body;

    let usersReg = JSON.parse(fs.readFileSync(path.join(process.cwd(), "/db/register.json"),"utf-8"))
    
    let obj = {
        id: usersReg.length ? usersReg.at(-1).id+1 : 1,
        ...newUser
    }
    usersReg.push(obj)
    fs.writeFileSync(path.join(process.cwd(), "/db/register.json"),JSON.stringify(usersReg,null,4))
    res.status(201).json({message:"Successfully registered"})
}
const LOGIN_POST = (req, res) => {
    res.send("login")
}

export default {
    GET,
    USER_POST,
    REGISTER_POST,
    LOGIN_POST
}