var express = require("express");
var router = express.Router();

const Report = require("../models/Report");

// Display all lost and found reports
router.get("/", async function (req, res, next) {
  try {
    const reports = await Report.find().sort({ createdAt: -1 });
    res.render("reports", { reports: reports });
  } catch (error) {
    next(error);
  }
});

// Handle the submitted report
router.post("/add", async function (req, res, next) {
  try {
    const newReport = new Report({
      itemName: req.body.title,
      category: req.body.category,
      description: req.body.description,
      location: req.body.location,
      date: req.body.date,
      reportType: req.body.type,
    });

    await newReport.save();

    res.redirect("/");
  } catch (error) {
    next(error);
  }
});

module.exports = router;
