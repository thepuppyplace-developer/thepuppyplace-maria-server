module.exports = (sequelize, DataTypes) => {
  const BoardCommentLike = sequelize.define(
    "BoardCommentLike",
    {},
    {
      timestamps: true,
      paranoid: true,
      charset: "utf8",
      collate: "utf8_general_ci",
      // tableName: "BoardCommentLike",
    }
  );
  BoardCommentLike.associate = (models) => {
    BoardCommentLike.belongsTo(models.User, {
      foreignKey: "user_id",
      sourceKey: "id",
    });
    BoardCommentLike.belongsTo(models.BoardComment, {
      foreignKey: "board_comment_id",
      sourceKey: "id",
    });
  };
  return BoardCommentLike;
};
