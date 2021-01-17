const Sequelize = require("sequelize");
const sequelize = new Sequelize("graphql", "root", "vishal#123", {
  dialect: "mysql",
  host: "localhost",
});
module.exports = sequelize;
