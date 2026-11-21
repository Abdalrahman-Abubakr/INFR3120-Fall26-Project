var express = require("express");
var router = express.Router();

const Report = require("../models/Report");

/* GET home page (Landing Page & Reports List) */
router.get("/", async function (req, res, next) {
  try {
    const reports = await Report.find().sort({ createdAt: -1 });

    res.render("index", {
      title: "CampusFind",
      reports: reports,
    });
  } catch (error) {
    next(error);
  }
});

/* GET report creation form */
router.get("/reports/add", function (req, res, next) {
  res.render("add-report");
});

module.exports = router;
