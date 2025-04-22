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