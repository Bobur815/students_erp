import studentMethods from "./studentservice.js"

function getStudents(req, res) {
    try {
        let students = studentMethods.getAllStudents();

        let {course,faculty,sort} = req.query;
        if(course){
            if(course > 4 || course < 1){
                return res.status(404).json({message: "Invalid course"})
            }
            students = students.filter(student => student.course==course);
        }

        if(faculty){
            students = students.filter(student => student.faculty.toLowerCase().includes(faculty.toLowerCase()));
        }

        if (sort === "firstname" || sort === "lastname") {
            students.sort((a, b) => a[sort].localeCompare(b[sort]));
          }

        res.status(200).json(students);

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
    res.status(201).json(studentMethods.createStudent(newdata))
} 
function updateStudent(req, res){
    const id = req.params;
    const data = req.body;
    studentMethods.updateStudent(id,data)
} 
function deleteStudent(req, res){
    const id = req.params;
    
    
    if(studentMethods.deleteStudent(id)){
        res.status(202).json({message: "Student successfully deleted"})
    }
    else{
        if(id){
        res.status(404).json({message: `Student with ID ${id} not found`})
        }
        else{
            res.status(404).json({message: "Invalid ID"})
        }
    }
    
}

export default {
    getStudents,
    getStudent,
    createStudent,
    updateStudent,
    deleteStudent
}