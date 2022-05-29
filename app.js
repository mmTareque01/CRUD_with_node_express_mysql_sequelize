const express = require("express");
const sequelize = require("./DB_Controllers/Connection");
const app = express();
const routers = require("./Routers/index")
const port = process.env.PORT || 4000


app.use(express.json());

app.use('/', routers);












// sequelize
//   .sync()
//   .then((result) => {


//     app.listen(port,(error)=>{
//       if(error){
//         console.log("making connection failed")
//       }else{
//         console.log("server running on port 5000...")
//       }
//     });


//   })
//   .catch((err) => {
//     console.log(err);
//   });



app.listen(port,(error)=>{
  if(error){
    console.log("making connection failed")
  }else{
    console.log(`server running on port ${port}...`)
  }
});