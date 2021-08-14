const express = require("express");
const routers = express.Router();
const controller = require("../Controllers/index")

routers.get('/getAllStudentsData', controller.getAllStudentsData);
routers.get('/getStudensDataById/:id', controller.getStudensDataById);
routers.post('/addNewStudent', controller.addNewStudent);
routers.put('/updateStudentsData/:id', controller.updateStudentsData);
routers.post('/deleteStudents/:id', controller.deleteStudents);


module.exports = routers;