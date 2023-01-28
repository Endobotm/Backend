var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index");
});
router.get("/comic1", function (req, res, next) {
  res.render("c1");
});
router.get("/comic2", function (req, res, next) {
  res.render("c2");
});
router.get("/comic3", function (req, res, next) {
  res.render("c3");
});
router.get("/comic4", function (req, res, next) {
  res.render("c4");
});
router.get("/comic5", function (req, res, next) {
  res.render("c5");
});

module.exports = router;
