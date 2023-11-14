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
        type: DataTypes.STRIMG(10),
      },
      text: {
        type: DataTypes.STRIMG(50),
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
