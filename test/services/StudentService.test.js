
const StudentService = require("./../../lib/services/StudentService.js");

describe("test for StudentService Class", ()=> {
    test("test for getStudents()", ()=> {
        const students = StudentService.getStudents()
        expect(students.length).toBe(51);
    });
});