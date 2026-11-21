var express = require("express");
var router = express.Router();

// Display all lost and found reports
router.get("/", function (req, res, next) {
  res.render("reports", { reports: [] });
});

module.exports = router;
