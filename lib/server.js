const StudentController = require("./controllers/StudentController");
const express = require("express");

const app = express();
app.use(express.json());
const port = 3000;

app.get("/", (request, response) => {
    response.json({message: "Code Challenge Api welcome!"});
});

app.get("/v1/students", (req, res) => {
    res.json(StudentController.getStudents())
})


app.listen(port, () => {
    console.log(`Code Challenge API in localhost:${port}`);
});