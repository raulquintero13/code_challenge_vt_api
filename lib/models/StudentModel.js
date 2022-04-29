const Database = require('../utils/Database')
const db = "./students.json";


class StudentModel{

    constructor(db){
        this.students = Database.tableStudents(db) 

    }

    getAll(){
        const students = this.students.filter((student) => student.name != undefined);
        return students;
    }
}

module.exports = StudentModel;