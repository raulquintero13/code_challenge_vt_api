const Reader = require("../../lib/utils/Reader");

class StudentService{

    static getStudents(number){
        const students = Reader.readJsonFile("./test/students.test.json");
        return students;
    }


}
module.exports = StudentService