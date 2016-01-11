var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('../webpack.config');

var staticDevServer = new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  noInfo: false,
  historyApiFallback: true
});
staticDevServer.use(function(req, res) {

});
staticDevServer.listen(3001, '127.0.0.1', function (err, result) {
  if (err) {
    console.log(err);
  }
  console.log('Static Dev Server Started');
  console.log('Listening at localhost:3001');
});
