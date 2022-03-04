module.exports = (sequelize, DataTypes) => {
  const BoardComment = sequelize.define(
    "BoardComment",
    {
      comment: {
        type: DataTypes.STRING(200),
        allowNull: false,
        comment: "board-comment",
      },
    },
    {
      timestamps: true,
      paranoid: true,
      charset: "utf8",
      collate: "utf8_general_ci",
      tableName: "BoardComment",
    }
  );
  BoardComment.associate = (models) => {
    BoardComment.hasMany(models.BoardCommentComment, {
      foreignKey: "board_comment_id",
      sourceKey: "id",
    });

    BoardComment.hasMany(models.BoardCommentLike, {
      foreignKey: "board_comment_id",
      sourceKey: "id",
    });

    BoardComment.belongsTo(models.User, {
      foreignKey: "user_id",
      sourceKey: "id",
    });

    BoardComment.belongsTo(models.Board, {
      foreignKey: "board_id",
      sourceKey: "id",
    });
  };
  return BoardComment;
};
