var express = require('express');
var router = express.Router();

/* GET home page (Landing Page & Reports List) */
router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'CampusFind',
    reports: [] // Will be populated from MongoDB by Abdul
  });
});

/* GET report creation form */
router.get('/reports/add', function(req, res, next) {
  res.render('add-report');
});

module.exports = router;
