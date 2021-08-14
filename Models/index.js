const Sequelize = require("sequelize");
const sequelize = require("../DB_Controllers/Connection");




const Students = sequelize.define("OurStudents", {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    class: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    phone: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    gender:{
      type:Sequelize.STRING,
      allowNull: false,
    }
  });
  
  module.exports = Students;










