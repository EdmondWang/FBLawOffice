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
        loader: 'coffee-loader'
      },
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'react-hot!babel?presets[]=es2015,presets[]=react',
      },
      {test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'},
      {test: /\.css$/, loader: 'style!css'}
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
    root: [process.cwd() + '/app', process.cwd() + '/node_modules'],
    extensions: ['', '.js', '.json', '.coffee']
  }
}
