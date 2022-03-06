module.exports = (sequelize, DataTypes) => {
  const Version = sequelize.define(
    "Version",
    {
      version: {
        type: DataTypes.STRING(10),
        allowNull: false,
        comment: "app-version",
      },
      force: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
        comment: "app-force-update",
      },
    },
    {
      timestamps: false,
      paranoid: false,
      charset: "utf8",
      collate: "utf8_general_ci",
      // tableName: "Version",
    }
  );
  return Version;
};
