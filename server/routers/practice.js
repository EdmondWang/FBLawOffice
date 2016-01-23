var express = require('express');
var router = express.Router();

router.get('/practicePoints', function(req, res) {
  var json = require('../jsons/zh-CN/practices.json');
  res.send(json);
});

module.exports = router;
