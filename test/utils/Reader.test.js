const Reader = require("../../lib/utils/Reader.js");

describe("test for Reader Class", ()=> {
    test("test for readJsonFile", ()=> {
        const explorers = Reader.readJsonFile("./test/students.test.json");
        expect(explorers.length).toBe(51);
    });
});