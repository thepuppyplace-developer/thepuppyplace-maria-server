module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define(
    "Comment",
    {
      comment: {
        type: DataTypes.STRING(200),
        allowNull: false,
        comment: "comment",
      },
    },
    {
      timestamps: true,
      paranoid: true,
      charset: "utf8",
      collate: "utf8_general_ci",
      tableName: "Comment",
    }
  );
  Comment.associate = (models) => {
    Comment.hasMany(models.Comment, {
      foreignKey: "comment_id",
      sourceKey: "id",
    });

    Comment.hasMany(models.CommentLike, {
      foreignKey: "comment_id",
      sourceKey: "id",
    });

    Comment.belongsTo(models.User, {
      foreignKey: "user_id",
      sourceKey: "id",
    });

    Comment.belongsTo(models.Board, {
      foreignKey: "board_id",
      sourceKey: "id",
    });
  };
  return Comment;
};
