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

        if (sort === "firstName" || sort === "lastName") {
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
    studentMethods.createStudent(newdata)
} 
function updateStudent(req, res){
   try {
    const {id} = req.params;
    const data = req.body;
    let answer = studentMethods.updateStudent(id,data)
    res.status(202).send(answer)
   } catch (error) {
        res.status(400).send(error.message)
   }
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