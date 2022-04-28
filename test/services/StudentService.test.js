
const StudentService = require("./../../lib/services/StudentService.js");
const Database = require("../../lib/utils/Database");
const db = "./test/students.test.json";
const dbEmpty = "./test/studentsEmpty.test.json";

describe("test for StudentService Class", ()=> {

    // endpoint /v1/students
    test("test for getStudents()", ()=> {
        let students = Database.studentsAll(db);
        students = StudentService.getStudents(students);
        expect(students.length).toBe(51);
    });

    test("test for getStudents() with DB empty", ()=> {
        let students = Database.studentsAll(dbEmpty);
        students = StudentService.getStudents(students);
        expect(students.length).toBe(0);
    });



});