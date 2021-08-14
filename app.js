const express = require("express");
const sequelize = require("./DB_Controllers/Connection");
const app = express();
const routers = require("./Routers/index")


app.use(express.json());

app.use('/', routers);












sequelize
  .sync()
  .then((result) => {
    // console.log(result);


    app.listen(5000,(error)=>{
      if(error){
        console.log("making connection failed")
      }else{
        console.log("server running on port 5000...")
      }
    });


  })
  .catch((err) => {
    console.log(err);
  });