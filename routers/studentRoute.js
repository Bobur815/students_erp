import { Router } from "express";
import userController from "../controllers/studentController.js";

let router = Router()

router
    .get("/api/students",userController.getStudents)
    .get("/api/students/:id",userController.getStudent)
    .post("/api/students",userController.createStudent)
    .put("/api/students/:id",userController.updateStudent)
    .delete("/api/students/:id",userController.deleteStudent)

export default router