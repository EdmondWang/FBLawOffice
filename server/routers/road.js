var express = require('express');
var router = express.Router();

router.get('/overview', function(req, res) {
  var json = require('../jsons/zh-CN/officeOverview.json');
  res.send(json);
});

router.get('/socialResponsibility', function(req, res) {
  var json = require('../jsons/zh-CN/socialResponsibility.json');
  res.send(json);
});

router.get('/mileStones/:year', function(req, res){
  var year = req.params.year;
  var json = require('../jsons/zh-CN/milestones-' + year + '.json');
  res.send(json);
});

router.get('/lawOffice-interview', function(req, res) {
  var json = require('../jsons/zh-CN/lawOffice-interview.json');
  res.send(json);
});

router.get('/articles/:id', function(){
  var json = require('../jsons/zh-CN/articles.json');
  res.send();
});

module.exports = router;
