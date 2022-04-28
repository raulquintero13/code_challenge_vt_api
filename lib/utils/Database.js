const Reader = require("./Reader");

class Database{

    static studentsAll(db){
        const students = Reader.readJsonFile(db);
        return students;
    }
}


module.exports = Database;