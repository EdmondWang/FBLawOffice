var express = require('express');
var router = express.Router();

router.get('/overview', function(req, res) {
  var json = require('../jsons/zh-CN/officeOverview.json');
  res.send(json);
});

module.exports = router;
