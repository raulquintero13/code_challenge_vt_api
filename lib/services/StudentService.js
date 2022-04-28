class StudentService{

    static getStudents(students){
        students = students.filter((student) => student.name != undefined);
        return students;
    }


}
module.exports = StudentService;