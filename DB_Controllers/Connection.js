const Sequelize = require("sequelize");

const sequelize = new Sequelize("students", "root", "", {
    dialect: "mysql",
    host: "localhost",
  });
  
  module.exports = sequelize;