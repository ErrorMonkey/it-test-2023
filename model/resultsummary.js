function resultsummary(Sequelize, DataTypes) {
  return Sequelize.define(
    "resultsummary",
    {
      TotalApplicants: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      TotalScore: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      MaxScoreApplicantsID: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      AverageScore: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      tableName: "resultsummary",
      freezeTableName: true,
      timestamps: false,
    }
  );
}

module.exports = resultsummary;
