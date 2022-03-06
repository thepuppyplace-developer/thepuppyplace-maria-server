module.exports = (sequelize, DataTypes) => {
  const BoardCategory = sequelize.define(
    "BoardCategory",
    {
      category: {
        type: DataTypes.STRING(200),
        allowNull: false,
        comment: "board-category",
      },
    },
    {
      timestamps: false,
      paranoid: false,
      charset: "utf8",
      collate: "utf8_general_ci",
      // tableName: "BoardCategory",
    }
  );
  BoardCategory.associate = (models) => {
    BoardCategory.belongsTo(models.Board, {
      foreignKey: "board_id",
      sourceKey: "id",
    });
  };
  return BoardCategory;
};
