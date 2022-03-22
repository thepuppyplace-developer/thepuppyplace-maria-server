module.exports = (sequelize, DataTypes) => {
  const BoardPhoto = sequelize.define(
    "BoardPhoto",
    {
      photo_url1: {
        type: DataTypes.STRING(100),
        allowNull: false,
        comment: "board-photo-url",
      },
      photo_url2: {
        type: DataTypes.STRING(100),
        allowNull: false,
        comment: "board-photo-url",
      },
      photo_url3: {
        type: DataTypes.STRING(100),
        allowNull: false,
        comment: "board-photo-url",
      },
      photo_url4: {
        type: DataTypes.STRING(100),
        allowNull: false,
        comment: "board-photo-url",
      },
      photo_url5: {
        type: DataTypes.STRING(100),
        allowNull: false,
        comment: "board-photo-url",
      },
      photo_url6: {
        type: DataTypes.STRING(100),
        allowNull: false,
        comment: "board-photo-url",
      },
      photo_url7: {
        type: DataTypes.STRING(100),
        allowNull: false,
        comment: "board-photo-url",
      },
      photo_url8: {
        type: DataTypes.STRING(100),
        allowNull: false,
        comment: "board-photo-url",
      },
      photo_url9: {
        type: DataTypes.STRING(100),
        allowNull: false,
        comment: "board-photo-url",
      },
      photo_url10: {
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
