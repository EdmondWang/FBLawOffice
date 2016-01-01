var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('../webpack.config');

var server = new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  noInfo: false,
  historyApiFallback: true
});
server.listen(3000, '127.0.0.1', function (err, result) {
  if (err) {
    console.log(err);
  }
  console.log('Listening at localhost:3000');
});
server.use('/', function(req, res) {
  //console.log(req.body.author);
  var data = [
    {'author': 'Edmond', 'text': 'This is a comment hosted by Edmond. '},
    {'author': 'Jocelyn', 'text': 'This is a comment hosted by Jocelyn. '},
    {'author': 'Edison', 'text': 'This is a comment hosted by Edison. '},
  ];
  res.send(data);
});
server.use(function(err, req, res, next) {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});
