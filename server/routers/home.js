var express = require('express');
var router = express.Router();

router.get('/asd', function(req, res) {
  var json = require('../jsons/zh-CN/officeOverview.json');
  res.send(json);
});

router.get('/asd', function(req, res) {
  var json = require('../jsons/zh-CN/socialResponsibility.json');
  res.send(json);
})
module.exports = router;
