const Sequelize = require("sequelize");
const sequelize = require("../utils/database");
const Message = sequelize.define("messages", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: Sequelize.STRING,
  email: Sequelize.STRING,
  message: Sequelize.STRING,
});

module.exports = Message;
