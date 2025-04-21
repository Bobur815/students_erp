import { Router } from "express"
import controller from "../controllers/index.js"

const router = Router()

router
    .get("/api/users",controller.GET)
    .post("/api/users",controller.USER_POST)
    .post("/api/register",controller.REGISTER_POST)
    .post("/api/login",controller.LOGIN_POST)

export default router