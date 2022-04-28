const StudentService = require("../services/StudentService");


class StudentController{

    static getStudents(){
        const students = StudentService.getStudents()
        return {success: true, message: "",data: {qty: students.length,students: students}}
    }
}
module.exports = StudentController