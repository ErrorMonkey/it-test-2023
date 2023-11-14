function comment(Sequelize, DataTypes) {
  return Sequelize.define(
    "comment",
    {
      maxID: {
        type: DataTypes.INTEGER,
        allowNull: false,
        automIncrement: true,
      },
      username: {
        type: DataTypes.STRING(10),
        allowNull: false,
      },
      comment: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
    },
    {
      tableName: "comment",
      freezeTableName: true,
      timestamps: false,
    }
  );
}

module.exports = comment;
