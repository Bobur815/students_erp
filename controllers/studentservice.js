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
    
    try {
        const students=JSON.parse(fs.readFileSync(path.join(process.cwd(),"/db/students.json"),"utf-8"))

        const newStudent={
            id:students.length?students.at(-1).id+1:1,
            ...data
        }

        students.push(newStudent)
        fs.writeFileSync(path.join(process.cwd(), "/db/students.json"), JSON.stringify(students, null, 4))

        return {message:"Student created successfully!", student:newStudent}
    } catch (error) {
        console.error(error);
        return {message:"Error creating student", error:error.message}
    }

}
const updateStudent = (id,data) => {

}
const deleteStudent = (id) => {
    if(!id) {
        return false;
    }

    try {
        students = students.filter(student => student.id!=id)
        fs.writeFileSync(path.join(process.cwd(),"/db/students.json"),students,null,4);
        return true;
    } catch (error) {
        return error;
    }
    

};

export default{
    getAllStudents,
    getStudentById,
    createStudent,
    updateStudent,
    deleteStudent
}