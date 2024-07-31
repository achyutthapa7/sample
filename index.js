const express = require("express");
const app = express();

app.post("/sayhello", (req, res) => {
  res.send("sayhello");
});
app.get("/sayhello", (req, res) => {
  res.send("sayhello");
});
app.listen(2000, () => {
  console.log("Server is running on port 2000"); // Server is listening on port 2000
});
