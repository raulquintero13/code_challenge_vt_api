const StudentService = require("../services/StudentService");
const StudentModel = require('../models/StudentModel')

const db = "./students.json";
const StudentClass = new StudentModel(db);

class StudentController{

    static getStudents(){
        let students = StudentClass.getAll();
        students = StudentService.getStudents(students);
        let message = `Se encontraron ${students.length} estudiantes `;

        if (students.length < 1)
            message = "No hay estudiantes en la base de datos";
        return {success: true, message: message, data: {qty: students.length,students: students}};
    }

    static getStudentsWithCertification(){
        let students = StudentClass.getAll();
        students = StudentService.getStudentsWithCertification(students);
        let message = `Se encontraron ${students.length} estudiantes con certificacion`;
        if (students.length < 1)
            message = "No hay estudiantes con certificacion en la base de datos";
        return {success: true, message: message, data: {qty: students.length,students: students}};
    }

    static getStudentsScoreGreaterThan(){
        let students = StudentClass.getAll();
        students = StudentService.getStudentsScoreGreaterThan(students);
        let message = `Se encontraron ${students.length} estudiantes con un srcore mayor a 500 puntos`;
        if (students.length < 1)
            message = "No hay estudiantes con un score mayor a 500 puntos en la base de datos";
        return {success: true, message: message, data: {qty: students.length,students: students}};
    }

}
module.exports = StudentController;