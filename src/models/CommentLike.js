module.exports = (sequelize, DataTypes) => {
  const CommentLike = sequelize.define(
    "CommentLike",
    {},
    {
      timestamps: true,
      paranoid: true,
      charset: "utf8",
      collate: "utf8_general_ci",
      tableName: "CommentLike",
    }
  );
  CommentLike.associate = (models) => {
    CommentLike.belongsTo(models.User, {
      foreignKey: "user_id",
      sourceKey: "id",
    });

    CommentLike.belongsTo(models.Board, {
      foreignKey: "board_id",
      sourceKey: "id",
    });

    CommentLike.belongsTo(models.Comment, {
      foreignKey: "comment_id",
      sourceKey: "id",
    });
  };
  return CommentLike;
};
