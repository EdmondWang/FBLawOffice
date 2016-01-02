var express = require('express');
var router = express.Router();

var data = [
  {'author': 'Edmond', 'text': 'This is a comment hosted by Edmond. '},
  {'author': 'Jocelyn', 'text': 'This is a comment hosted by Jocelyn. '},
  {'author': 'Edison', 'text': 'This is a comment hosted by Edison. '},
];

router.get('/', function(req, res) {
  res.send(data);
});

router.post('/', function(req, res) {
  data.push({
    'author': req.body.author,
    'text': req.body.text
  });
  console.log(req.body);
  res.send(data);
});

module.exports = router;
