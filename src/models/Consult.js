module.exports = (sequelize, DataTypes) => {
  const Consult = sequelize.define(
    "Consult",
    {
      title: {
        type: DataTypes.STRING(30),
        allowNull: false,
        comment: "consult-title",
      },
      description: {
        type: DataTypes.STRING(500),
        allowNull: false,
        comment: "consult-description",
      },
      email: {
        type: DataTypes.STRING(50),
        allowNull: false,
        comment: "consult-user-email",
      },
    },
    {
      charset: "utf8",
      collate: "utf8_general_ci",
      timestamps: true,
      tableName: "Consult",
      paranoid: true,
    }
  );
  Consult.associate = (models) => {
    Consult.belongsTo(models.User, { foreignKey: "user_id", sourceKey: "id" });
  };
  return Consult;
};
