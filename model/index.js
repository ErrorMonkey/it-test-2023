const Sequelize = require("sequelize");
const config = require("../config/config.json")["development"];

const db = {};
const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.applicants = require("./applicants")(sequelize, Sequelize);
db.comment = require("./comment")(sequelize, Sequelize);

module.exports = db;
