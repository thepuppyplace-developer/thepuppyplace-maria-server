const express = require("express");
const app = express();
app.use("/user", require("./user"));
app.use("/board", require("./board"));

app.use((req, res) => {
  return res.status(404).json({ message: "not-found-API" });
});

app.use((error, req, res, next) => {
  console.log(error);
  return res.status(500).json({ messgae: "unknown" });
});

module.exports = app;
