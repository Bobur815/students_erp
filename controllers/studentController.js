import studentMethods from "./studentservice.js"

function getStudents(req, res) {

    // Boburmirzo Ergashev
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

    // Boburmirzo Ergashev
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

    // Abdurahmon
    const newdata = req.body;
    res.status(201).json(studentMethods.createStudent(newdata))
} 
function updateStudent(req, res){

    // Azizbek Davronov
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

    // Muhammadyahyo
    const {id} = req.params;

    res.status(202).json(studentMethods.deleteStudent(id))
}

export default {
    getStudents,
    getStudent,
    createStudent,
    updateStudent,
    deleteStudent
}