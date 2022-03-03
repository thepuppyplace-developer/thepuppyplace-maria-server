module.exports = (sequelize, DataTypes) => {
  const Consult_photo = sequelize.define(
    "Consult_photo",
    {
      photo_url: {
        type: DataTypes.STRING(100),
        allowNull: false,
        comment: "consult-photo-url",
      },
    },
    {
      charset: "utf8",
      collate: "utf8_general_ci",
      timestapms: true,
      tableName: "Consult_photo",
      paranoid: true,
    }
  );
  Consult_photo.associate = (models) => {
    Consult_photo.belongsTo(models.Consult, {
      foreignKey: "consult_id",
      sourceKey: "id",
    });
  };
  return Consult_photo;
};
