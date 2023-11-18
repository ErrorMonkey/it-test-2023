const Sequelize = require("sequelize");
const config = require("../config/config.json")["development"];

console.log(process.env);

config.user = process.env.DB_USER;

const db = {};
const sequelize = new Sequelize(
  config.database,
  config.user,
  process.env.DB_PASSWORD,
  config
);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.applicants = require("./applicants")(sequelize, Sequelize);
db.comment = require("./comment")(sequelize, Sequelize);

module.exports = db;
