module.exports = (sequelize, DataTypes) => {
  const BoardLike = sequelize.define(
    "BoardLike",
    {},
    {
      timestamps: true,
      paranoid: true,
      charset: "utf8",
      collate: "utf8_general_ci",
      tableName: "BoardLike",
    }
  );
  BoardLike.associate = (models) => {
    BoardLike.belongsTo(models.User, {
      foreignKey: "user_id",
      sourceKey: "id",
    });

    BoardLike.belongsTo(models.Board, {
      foreignKey: "board_id",
      sourceKey: "id",
    });
  };
  return BoardLike;
};
