const Reader = require("./Reader");

class Database{

    static tableStudents(db){
        const students = Reader.readJsonFile(db);
        return students;
    }
}


module.exports = Database;