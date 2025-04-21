import { Router } from "express"
import controller from "../controllers/index.js"

const router = Router()

router
    .get("/api/users", controller.GET)
    .get("/api/register", controller.GET_R)
    .post("/api/users", controller.USER_POST)
    .post("/api/register", controller.REGISTER_POST)
    .post("/api/login", controller.LOGIN_POST)

export default router