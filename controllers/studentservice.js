import fs from "fs"
import path from "path"

const students = JSON.parse(fs.readFileSync(path.join(process.cwd(),"/db/students.json"),"utf-8"))

const getAllStudents  = () => {
}
const getStudentById  = (id) => {

}
const createStudent  = (data) => {
    

}
const updateStudent = (id,data) => {

}
const deleteStudent = (id) => {
    
};

export default{
    getAllStudents,
    getStudentById,
    createStudent,
    updateStudent,
    deleteStudent
}