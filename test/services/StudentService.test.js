
const StudentService = require("./../../lib/services/StudentService.js");
const StudentModel = require('../../lib/models/StudentModel')
// const Database = require('../../lib/utils/Database');
const db = "./test/students.test.json";
const dbEmpty = "./test/studentsEmpty.test.json";



describe("test for StudentService Class", ()=> {
    
    // endpoint /v1/students
    test("test for getStudents()", ()=> {
        const StudentClass = new StudentModel(db);
        let students = StudentClass.getAll();
        students = StudentService.getStudents(students);
        expect(students.length).toBe(51);
    });

    test("test for getStudents() with DB empty", ()=> {
        const StudentClass = new StudentModel(dbEmpty);
        let students = StudentClass.getAll();
        students = StudentService.getStudents(students);
        expect(students.length).toBe(0);
    });

    //endpoint /v1/students/with-certification/show/email
    test("for getStudentsWithCertification", ()=> {
        const StudentClass = new StudentModel(db);
        let students = StudentClass.getAll();
        students = StudentService.getStudentsWithCertification(students);
        expect(students.length).toBe(29);
    })

    //endpoint /v1/students/score-greater-than/show/email
    test("for getStudentsWithCertification", ()=> {
        const StudentClass = new StudentModel(db);
        let students = StudentClass.getAll();
        students = StudentService.getStudentsScoreGreaterThan(students);
        expect(students.length).toBe(27);
    })

    

});