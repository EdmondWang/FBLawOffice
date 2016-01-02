var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(express.static('web'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// Routers
var comments = require('./routers/comments');
app.use('/comments', comments);

// Open Port
app.listen(3000, '127.0.0.1', function(err, result) {
  if (err) {
    console.log(err);
  }
  console.log('Data Server Started');
  console.log('Listening at localhost:3000');
});
