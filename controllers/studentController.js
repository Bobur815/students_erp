import studentMethods from "./studentservice.js"

function getStudents(req, res) {
    try {
        res.status(200).json(studentMethods.getAllStudents())
    } catch (error) {
        res.status(404).json({error:"Something went wrong"})
    }
} 
function getStudent(req, res) {
    try {
        const id = req.params.id;
        const student = studentMethods.getStudentById(id);
        if (!student) {
          return res.status(404).json({ error: "Student not found" });
        }
        res.status(200).json(student);
      } catch (error) {
        res.status(500).json({ error: "Server error" });
      }
} 
function createStudent(req, res){
    const newdata = req.body;
    studentMethods.createStudent(newdata)
} 
function updateStudent(req, res){
    const id = req.params;
    const data = req.body;
    studentMethods.updateStudent(id,data)
} 
function deleteStudent(req, res){
    const id = req.params;
    studentMethods.deleteStudent(id)
}

export default {
    getStudents,
    getStudent,
    createStudent,
    updateStudent,
    deleteStudent
}