const express = require("express");
require("dotenv").config();
const app = express();
const { sequelize } = require("./src/models/index");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/", require("./src/routes/index"));

sequelize.sync((error) => {
  if (error) {
    return console.error(err, "📟Error Connection To Database📟");
  } else {
    return console.log(` 🐱 Connected To Maria Database 🐱
          ####################################
          `);
  }
}); //{ force: true } <- DB 초기화

app.listen(process.env.PORT, (error) => {
  if (error) {
    return console.log("error");
  } else {
    return console.log(`PORT: ${process.env.PORT}`);
  }
});
