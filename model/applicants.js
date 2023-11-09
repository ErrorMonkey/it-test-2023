function applicants(Sequelize, DataTypes) {
  return Sequelize.define(
    "applicants",
    {
      ApplicantsID: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING(15),
        allowNull: false,
      },
      score: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      tableName: "applicants",
      freezeTableName: true,
      timestamps: false,
    }
  );
}

module.exports = applicants;
