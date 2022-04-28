const StudentService = require("../services/StudentService");
const Database = require("../utils/Database");
const db = "./students.json";

class StudentController{

    static getStudents(){
        let students = Database.studentsAll(db);
        students = StudentService.getStudents(students);
        let message = `Se encontraron ${students.length} estudiantes `;

        if (students.length < 1)
            message = "No hay estudiantes en la base de datos";
        return {success: true, message: message, data: {qty: students.length,students: students}};
    }

    static getStudentsWithCertification(){
        let students = Database.studentsAll(db);
        students = StudentService.getStudentsWithCertification(students);
        let message = `Se encontraron ${students.length} estudiantes con certificacion`;
        if (students.length < 1)
            message = "No hay estudiantes con certificacion en la base de datos";
        return {success: true, message: message, data: {qty: students.length,students: students}};
    }



}
module.exports = StudentController;