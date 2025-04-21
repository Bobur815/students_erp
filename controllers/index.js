import fs from "fs"
import path from "path"

const GET = (req, res) => {
    res.send("get users")
}

const USER_POST = (req, res) => {
    const users = req.body
    let userJson = JSON.parse(fs.readFileSync(path.join(process.cwd(), "/db/users.json"), "utf-8"))
    let newuser = {
        id: userJson.length ? userJson[userJson.length - 1].id + 1 : 1,
        createdAt: new Date(),
        ...users
    }
    userJson.push(newuser)
    fs.writeFileSync(path.join(process.cwd(), "/db/users.json"), JSON.stringify(userJson, null, 2))
}
const REGISTER_POST = (req, res) => {
    res.send("register")
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