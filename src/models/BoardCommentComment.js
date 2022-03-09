module.exports = (sequelize, DataTypes) => {
  const BoardCommentComment = sequelize.define(
    "BoardCommentComment",
    {
      comment: {
        type: DataTypes.STRING(200),
        allowNull: false,
        comment: "board-comment-comment",
      },
    },
    {
      timestamps: true,
      paranoid: true,
      charset: "utf8",
      collate: "utf8_general_ci",
      tableName: "BoardCommentComment",
    }
  );
  BoardCommentComment.associate = (models) => {
    BoardCommentComment.belongsTo(models.User, {
      foreignKey: "user_id",
      sourceKey: "id",
    });

    BoardCommentComment.belongsTo(models.Board, {
      foreignKey: "board_id",
      sourceKey: "id",
    });

    BoardCommentComment.belongsTo(models.BoardComment, {
      foreignKey: "board_comment_id",
      sourceKey: "id",
    });
  };
  return BoardCommentComment;
};
