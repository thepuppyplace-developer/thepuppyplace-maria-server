module.exports = (sequelize, DataTypes) => {
  const Board_photo = sequelize.define(
    "Board_photo",
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
      timestapms: true,
      tableName: "Board_photo",
      paranoid: true,
    }
  );
  Board_photo.associate = (models) => {
    Board_photo.belongsTo(models.Board, {
      foreignKey: "board_id",
      sourceKey: "id",
    });
  };
  return Board_photo;
};
