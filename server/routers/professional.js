var express = require('express');
var router = express.Router();

router.get('/employees', function(req, res) {
  var json = require('../jsons/zh-CN/employees.json');
  res.send(json);
});

module.exports = router;
