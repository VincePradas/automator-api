const express = require("express");
const app = express();

let logMessages = []; // Make sure this is defined here or imported if shared

// Route to get logs
app.get("/get-logs", (req, res) => {
  res.json({ logs: logMessages });
  logMessages = []; // Clear logs after sending to avoid duplicates
});

module.exports = app;
