import { Router } from "express";
import userController from "../controllers/studentController.js";

let router = Router();
console.log(router)

router
    .get("/api/students/:id",userController.getStudent)
    .get("/api/students",userController.getStudents)
    .post("/api/students",userController.createStudent)
    .put("/api/students/:id",userController.updateStudent)
    .delete("/api/students/:id",userController.deleteStudent)

export default router