function score(Sequelize, DataTypes) {
  return Sequelize.define(
    "score",
    {
      ApplicantsID: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      answer1: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      answer2: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      answer3: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      answer4: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      answer5: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      answer6: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      answer7: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      answer8: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      answer9: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      answer10: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      tableName: "score",
      freezeTableName: true,
      timestamps: false,
    }
  );
}

module.exports = score;
