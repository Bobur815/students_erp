import fs from "fs"

const GET = (req, res) => {
    res.send("get users")
}

const USER_POST = (req, res) => {
    const users = req.body

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