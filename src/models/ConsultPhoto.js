module.exports = (sequelize, DataTypes) => {
  const ConsultPhoto = sequelize.define(
    "ConsultPhoto",
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
      timestapms: false,
      tableName: "ConsultPhoto",
      paranoid: false,
    }
  );
  ConsultPhoto.associate = (models) => {
    ConsultPhoto.belongsTo(models.Consult, {
      foreignKey: "consult_id",
      sourceKey: "id",
    });
  };
  return ConsultPhoto;
};
