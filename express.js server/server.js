var express = require("express");

var app = express();

app.get("/", function (req, res) {
  res.send("Content");
});

app.listen(3000, () => {
  console.log("listening on http://localhost:3000");
});
