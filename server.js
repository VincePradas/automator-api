const express = require("express");
const app = express();

app.post("/", (req, res) => {
  res.status(200).json({ message: "Endpoint is working" });
});

module.exports = app;
