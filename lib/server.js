const StudentController = require("./controllers/StudentController");
const express = require("express");

const app = express();
app.use(express.json());
const port = 3000;

app.get("/", (request, response) => {response.json({message: "Code Challenge Api welcome!"});});

app.get("/v1/students", (req, res) => {res.json(StudentController.getStudents());});
app.get("/v1/students/with-certification/show/email", (req, res) => {res.json(StudentController.getStudentsWithCertification());});
app.get("/v1/students/score-greater-than", (req, res) => {res.json(StudentController.getStudentsScoreGreaterThan());});

var server = app.listen(port, () => {
    console.log(`Code Challenge API in localhost:${port}`);
});

var handler = function() {
    server.close();
};

module.exports = {app, handler};