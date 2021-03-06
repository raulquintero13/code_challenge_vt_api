const request = require("supertest");
const {app, handler} = require("../lib/server");

describe("Server test suite", () => {
    test(" / gives welcome message", async () => {
        const response = await request(app).get("/");
        expect(response.body.message).toEqual("Code Challenge Api welcome!");
        expect(response.statusCode).toBe(200);
        expect.assertions(2);
        handler();
    });
    
});