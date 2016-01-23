var express = require('express');
var bodyParser = require('body-parser');
var i18n = require('i18n');

var app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'jade');

app.use(express.static('web'));
app.use(express.static('build'));
app.use(express.static('node_modules'));

i18n.configure({
  locales:['en-US', 'zh-CN', 'ja-JP'],
  defaultLocale: 'zh-CN',
  directory: __dirname + '/locales',
  updateFiles: false,
  indent: '\t',
  extension: '.js'
});
app.use(i18n.init);

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

var reverseProxyHost = process.env.PROD == 'true' ? '114.55.9.64:80' : 'localhost:3000';
app.get('/', function(req, res) {
  res.render('layout', {host: reverseProxyHost});
});

// Routers
var comments = require('./routers/comments');
app.use('/comments', comments);

var home = require('./routers/home');
app.use('/home', home);

var road = require('./routers/road');
app.use('/road', road);

var professional = require('./routers/professional');
app.use('/professional', professional);

// var road = require('./routers/home');
// app.use('/road', road);

// Open Port
app.listen(3000, '127.0.0.1', function(err, result) {
  if (err) {
    console.log(err);
  }
  console.log('Data Server Started');
  console.log('Listening at localhost:3000');
});
