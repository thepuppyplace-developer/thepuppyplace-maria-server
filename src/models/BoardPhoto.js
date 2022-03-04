module.exports = (sequelize, DataTypes) => {
  const BoardPhoto = sequelize.define(
    "BoardPhoto",
    {
      photo_url: {
        type: DataTypes.STRING(100),
        allowNull: false,
        comment: "board-photo-url",
      },
    },
    {
      charset: "utf8",
      collate: "utf8_general_ci",
      tableName: "BoardPhoto",
      timestamps: false,
      paranoid: false,
    }
  );
  BoardPhoto.associate = (models) => {
    BoardPhoto.belongsTo(models.Board, {
      foreignKey: "board_id",
      sourceKey: "id",
    });
  };

  return BoardPhoto;
};
