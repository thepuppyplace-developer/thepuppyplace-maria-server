module.exports = (sequelize, DataTypes) => {
  const BoardCategory = sequelize.define(
    "BoardCategory",
    {
      category1: {
        type: DataTypes.STRING(200),
        allowNull: false,
        comment: "board-category",
      },
      category2: {
        type: DataTypes.STRING(200),
        allowNull: false,
        comment: "board-category",
      },
      category3: {
        type: DataTypes.STRING(200),
        allowNull: false,
        comment: "board-category",
      },
      category4: {
        type: DataTypes.STRING(200),
        allowNull: false,
        comment: "board-category",
      },
      category5: {
        type: DataTypes.STRING(200),
        allowNull: false,
        comment: "board-category",
      },
      category6: {
        type: DataTypes.STRING(200),
        allowNull: false,
        comment: "board-category",
      },
      category7: {
        type: DataTypes.STRING(200),
        allowNull: false,
        comment: "board-category",
      },
      category8: {
        type: DataTypes.STRING(200),
        allowNull: false,
        comment: "board-category",
      },
      category9: {
        type: DataTypes.STRING(200),
        allowNull: false,
        comment: "board-category",
      },
      category10: {
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
      tableName: "BoardCategory",
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
