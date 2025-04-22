import fs from "fs"
import path from "path"

const students = JSON.parse(fs.readFileSync(path.join(process.cwd(),"/db/students.json"),"utf-8"))

const getAllStudents  = () => {
    return students;
}
const getStudentById  = (id) => {
    let student = students.find(student => student.id==id)
    if(student){
        return student;
    }
    return null;
}
const createStudent  = (data) => {
    

}
const updateStudent = (id,data) => {
        if(!students.some(student => student.id == id) || id < 1){
            throw new Error("Siz bergan Id topilmadi!");
        }
        let student = students.find(student => student.id == id)
        student.firstName = data.firstName ?  data.firstName : student.firstName;
        student.lastName = data.lastName ?  data.lastName : student.lastName;
        student.course = data.course ?  data.course : student.coursee;
        student.faculty = data.faculty ?  data.faculty : student.faculty;

        fs.writeFileSync(path.join(process.cwd(),"/db/students.json"),JSON.stringify(students,null,4));
        return "Update 👍+"

}
const deleteStudent = (req, res) => {
    let id = parseInt(req.params.id); 
    let data = JSON.parse(fs.readFileSync("./db/students.json", "utf-8"));
    let index = data.findIndex(user => user.id === id);

    if(index !== -1){
        data.splice(index, 1);
        fs.writeFileSync("./db/students.json", JSON.stringify(data, null, 4));
        res.send("o'chirildi");
    } else {
        res.status(404).send("xatolik bor, IDni to'g'ri tering");
    }
};


export default{
    getAllStudents,
    getStudentById,
    createStudent,
    updateStudent,
    deleteStudent
}