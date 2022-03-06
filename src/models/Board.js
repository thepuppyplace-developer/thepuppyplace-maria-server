module.exports = (sequelize, DataTypes) => {
  const Board = sequelize.define(
    "Board",
    {
      title: {
        type: DataTypes.STRING(30),
        allowNull: false,
        comment: "board-title",
      },
      description: {
        type: DataTypes.STRING(500),
        allowNull: false,
        comment: "board-description",
      },
      location: {
        type: DataTypes.STRING(20),
        allowNull: false,
        comment: "board-location",
      },
      view_count: {
        type: DataTypes.INTEGER(),
        allowNull: false,
        defaultValue: 0,
        comment: "board-view-count",
      },
    },
    {
      charset: "utf8", // 한국어 설정
      collate: "utf8_general_ci", // 한국어 설정
      timestamps: true, // createAt & updateAt 활성화
      // tableName: "Board",
      paranoid: true, // 테이블을 삭제할 수 없게되며, 삭제요청시 deleteType이 수정된다.
    }
  );
  Board.associate = (models) => {
    Board.hasMany(models.BoardPhoto, {
      foreignKey: "board_id",
      sourceKey: "id",
    });

    Board.hasMany(models.BoardComment, {
      foreignKey: "board_id",
      sourceKey: "id",
    });

    Board.hasMany(models.BoardCategory, {
      foreignKey: "board_id",
      sourceKey: "id",
    });
  };
  return Board;
};
