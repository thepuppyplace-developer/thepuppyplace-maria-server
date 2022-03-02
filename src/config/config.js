require("dotenv").config();
const ENV = process.env;

module.exports = {
  db_config: {
    username: ENV.RDS_USERNAME,
    password: ENV.RDS_PASSWORD,
    database: ENV.RDS_DATABASE,
    host: ENV.RDS_HOST,
    dialect: ENV.RDS_DIALECT,
    logging: false,
  },
};
