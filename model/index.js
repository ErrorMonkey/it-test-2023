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
db.score = require("./score")(sequelize, Sequelize);

// db.applicants.hasOne(db.score, {
//   onDelete: "CASCADE",
//   foreignKey: "ApplicantsID",
//   sourceKey: "ApplicantsID",
// });

// db.score.belongsTo(db.applicants, {
//   foreignKey: "ApplicantsID",
// });

module.exports = db;
