import express from "express"

const PORT = process.env.PORT || 3000
const app = express()

app.use(express.json())

app.listen(3000, () => console.log("server is running"))