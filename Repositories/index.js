const models = require("../Models/index");
const actWithDB = require("../DB_Controllers/Query");

const databaseObj = new actWithDB();



var StudentsRepo = {


    getAllStudentsData(){
        return databaseObj.getAllStudents(models)
    },
    getStudensDataById(id){
        return databaseObj.getStudentsById(models, id)
    },

    addNewStudent(jsonData){
        return databaseObj.addNewStudents(models, jsonData)
    },


    updateStudentsData(jsonData, id){
        return databaseObj.updateStudent(models, jsonData, id)
    },


    deleteStudents(id){
        return databaseObj.deleteStudentsDataById(models, id)
    }




}
module.exports = StudentsRepo;