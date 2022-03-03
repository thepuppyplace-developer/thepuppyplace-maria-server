module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      email: {
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: true,
        comment: "email",
      },
      password: {
        type: DataTypes.STRING(30),
        allowNull: false,
        comment: "password",
      },
      nickname: {
        type: DataTypes.STRING(16),
        allowNull: false,
        unique: true,
        comment: "nickname",
      },
      name: {
        type: DataTypes.STRING(10),
        allowNull: true,
        comment: "name",
      },
      phone_number: {
        type: DataTypes.STRING(11),
        allowNull: true,
        comment: "phone_number",
      },
      gender: {
        type: DataTypes.STRING(10),
        allowNull: true,
        comment: "phone_number",
      },
      location: {
        type: DataTypes.STRING(30),
        allowNull: true,
        comment: "user_location",
      },
      like_notification: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
        comment: "like_notification",
      },
      comment_notification: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
        comment: "comment_notification",
      },
    },
    {
      charset: "utf8", // 한국어 설정
      collate: "utf8_general_ci", // 한국어 설정
      timestamps: true, // createAt & updateAt 활성화
      paranoid: true, // 테이블을 삭제할 수 없게되며, 삭제요청시 deleteType이 수정된다.
    }
  );
  User.associate = function (models) {};
  return User;
};
