module.exports = (sequelize, DataTypes) => {
  const UserPhoto = sequelize.define(
    "UserPhoto",
    {
      photo_url: {
        type: DataTypes.STRING(100),
        allowNull: false,
        comment: "user-photo-url",
      },
    },
    {
      charset: "utf8",
      collate: "utf8_general_ci",
      timestamps: true,
      // tableName: "UserPhoto",
      paranoid: true,
    }
  );
  UserPhoto.associate = (models) => {
    UserPhoto.belongsTo(models.User, {
      foreignKey: "user_id",
      sourceKey: "id",
    });
  };
  return UserPhoto;
};
