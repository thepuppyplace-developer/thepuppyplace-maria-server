const fs = require("fs");
const path = require("path");
const Sequelize = require("sequelize");
const basename = path.basename(__filename);
const config = require("../config/config").db_config;
const db = {};

let sequelize;

//config.js 파일에 있는 정보를 가져와 sequelize 객체를 생성한다.
sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

// 우리가 작성한 Table파일을 찾아온다.
fs.readdirSync(__dirname)
  .filter((file) => {
    return (
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
    );
  })
  .forEach((file) => {
    const model = require(path.join(__dirname, file))(
      sequelize,
      Sequelize.DataTypes
    );
    db[model.name] = model;
  });

//DB에 모델이름을 연결한다.
Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
