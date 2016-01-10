var express = require('express');
var router = express.Router();

router.get('/intro', function(req, res) {
  var json = require('../jsons/zh-CN/officeIntroductions.json');
  res.send(json);
});

module.exports = router;
