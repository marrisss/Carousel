const Sequelize = require("sequelize");
const sequelize = require("../utils/database");
const Content = sequelize.define("content", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  mainheader: Sequelize.STRING,
  description: Sequelize.STRING,
});

module.exports = Content;
