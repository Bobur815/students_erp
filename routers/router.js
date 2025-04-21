import { Router } from "express";
import userController from "../controllers/index.js";

let router = Router()

router
    .get("/api/todos",userController.GET)
    .post("/api/todos",userController.POST)
    .put("/api/todos",userController.PUT)
    .delete("/api/users/:id",userController.DELETE)

export default router