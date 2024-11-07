const express = require("express");
const app = express();

app.use(express.json());

app.post("/", (req, res) => {
  res.status(200).json({ message: "Endpoint is working" });
});

module.exports = app;
