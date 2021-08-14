class Query{

    addNewStudents(model, jsonData){
        let data = {
            name: jsonData.name,
            class: jsonData.class,
            phone: jsonData.phone,
            gender: jsonData.gender
        }
        return model.create(data);
    }

    getAllStudents(model){
        let data = model.findAll();
        return data;
    }

    getStudentsById(model, id){
        let data = model.findAll({
            where:{
                id: id
            }
        })
        return data;
    }

    updateStudent(model, jsonData, id){
        let data = {
            name: jsonData.name,
            class: jsonData.class,
            phone: jsonData.phone,
            gender: jsonData.gender
        }

        return model.update(
            data, 
            {
                where:{
                    id : id
                }
            }
        )
    }


    deleteStudentsDataById(model, id){
        return model.destroy(
            {
                where:{
                    id : id
                }
            }
        )
    }


}
module.exports = Query;