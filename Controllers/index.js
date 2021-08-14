const modelsRepo = require('../Repositories/index')



var StudentsControllers = {
    async getAllStudentsData(req, res){
        modelsRepo.getAllStudentsData()
            .then((data)=>{
                res.send(data)
            })
            .catch((error)=>{
                res.send(error)
            })
    },

    async getStudensDataById(req, res){
        modelsRepo.getStudensDataById(req.params.id)
            .then((data)=>{
                let len = Object.keys(data).length;
            if(len > 0){
                res.send(data)
            }
            else{
                res.status(404).send({error:"page not found"})
            }
            })
            .catch((err)=>{
                throw err;
            })
        
    },

    async addNewStudent(req, res){

        modelsRepo.addNewStudent(req.body)
        .then((data)=>{
            res.send({
                message:"new student has been added"
            })
        })
        .catch((error)=>{
            res.status(500).send({
                error: "Internal server error"
            })
        })

        

    },

    async updateStudentsData(req, res){
        modelsRepo.updateStudentsData(req.body, req.params.id)
            .then((data)=>{
                res.send({
                    message: "Student's data has been updated",
                })
            })
            .catch((error)=>{
                res.send(error)
            })
    },


    async deleteStudents(req, res){
        modelsRepo.deleteStudents(req.params.id)
            .then((data)=>{
                res.send({
                    message: "Data has been deleted"
                })
            })
            .catch((error)=>{
                res.send(error)
            })
    },

}

module.exports = StudentsControllers;