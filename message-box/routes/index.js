var express = require("express");
var router = express.Router();
var path = require("path");
var fs = require("fs");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index");
});
router.post("/success", function (req, res, next) {
  const sender = req.body.senderName;
  const message = req.body.message;
  let content = `Sent by: ${sender}
  Message: ${message}`;
  fs.writeFile(path.join(__dirname, "../message.txt"), content, function (err) {
    if (err) {
      console.log(err);
      return;
    }
    res.render("done");
  });
});
module.exports = router;
