const express = require("express");
const app = express();
app.use("/user", require("./user"));
app.use("/board", require("./board"));
app.use("/consult", require("./consult"));

app.use((req, res) => {
  return res.status(404).json({ message: "not-found-API" });
});

app.use((error, req, res, next) => {
  console.log(error.stack);
  return res.status(500).json({ messgae: "unknown" });
});

module.exports = app;
