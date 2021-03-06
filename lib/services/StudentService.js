class StudentService{

    static getStudents(students){
        students = students.filter((student) => student.name != undefined);
        return students;
    }
    static getStudentsWithCertification(students){
        const studentsTemp = students.filter((student) => student.haveCertification == true);
        students = studentsTemp.map((student) => student.email);
        return students;
    }

    static getStudentsScoreGreaterThan(students){
        students = students.filter((student) => student.credits > 500);
        return students;
    }

}
module.exports = StudentService;