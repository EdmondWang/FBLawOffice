var webpack = require("webpack");

module.exports = {
  entry: [
    'webpack-dev-server/client?http://127.0.0.1:3001', // WebpackDevServer host and port
    'webpack/hot/only-dev-server',
    __dirname + '/web/js/entry' // Your appʼs entry point
  ],
  output: {
    path: __dirname +'/build',
    publicPath: 'http://127.0.0.1:3001/web/',
    filename: 'bundle.js', // '[hash:8].[name].min.js'
  },
  module: {
    loaders: [
      {
        test: /\.coffee$/,
        loader: 'coffee'
      },
      {
        test: /\.jade$/,
        loader: 'jade'
      },
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'react-hot!babel?presets[]=es2015,presets[]=react',
      },
      {test: /\.(png|jpg)$/, loader: 'url?limit=8192'},
      {test: /\.css$/, loader: 'style!css!less'},
      {test: /\.eot/,loader : 'file?prefix=font/'},
      {test: /\.woff/,loader : 'file?prefix=font/&limit=10000&mimetype=application/font-woff'},
      {test: /\.ttf/, loader : 'file?prefix=font/'},
      {test: /\.svg/, loader : 'file?prefix=font/'},
      {test: /\.otf/, loader : 'file?prefix=font/'},
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      "window.jQuery": "jquery"
    })
  ],
  resolve: {
    root: [process.cwd() + '/web', process.cwd() + '/node_modules'],
    extensions: ['', '.js', '.json', '.coffee', '.css']
  }
}
