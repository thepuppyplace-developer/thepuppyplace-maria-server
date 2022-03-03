module.exports = (sequelize, DataTypes) => {
  const Notification = sequelize.define(
    "Notification",
    {
      fcm_token: {
        type: DataTypes.STRING(200),
        allowNull: false,
        unique: true,
        comment: "notification-firebase-cloud-message-token",
      },
      like_notification: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
        comment: "like-notification-setting",
      },
      comment_notification: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
        comment: "comment-notification-setting",
      },
    },
    {
      charset: "utf8",
      collate: "utf8_general_ci",
      tableName: "Notification",
      paranoid: true,
    }
  );
  return Notification;
};
