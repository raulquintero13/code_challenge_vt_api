const StudentService = require("../services/StudentService");
const Database = require("../utils/Database");
const db = "./students.json";

class StudentController{

    static getStudents(){
        let students = Database.studentsAll(db);
        students = StudentService.getStudents(students);
        let message = "";
        if (students.length < 1)
            message = "No hay estudiantes en la base de datos";
        return {success: true, message: message, data: {qty: students.length,students: students}};
    }
}
module.exports = StudentController;