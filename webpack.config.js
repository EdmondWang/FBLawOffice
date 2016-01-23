var webpack = require('webpack');

module.exports = {
  // entry: [
  //   // 'webpack-dev-server/client?http://127.0.0.0:3001', // WebpackDevServer host and port
  //   // 'webpack/hot/only-dev-server',
  //   __dirname + '/web/js/entry' // Your appʼs entry point
  // ],
  entry: {
    vendor: ['jquery', 'bootstrap', 'marked', 'react', 'react-router'],
    app: __dirname + '/web/js/entry'
  },
  output: {
    crossOriginLoading: true,
    path: __dirname +'/build',
    // publicPath: 'http://localhost:3000/',
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
        // loader: 'react-hot!babel?presets[]=es2015,presets[]=react',
        loader: 'babel?presets[]=es2015,presets[]=react',
      },
      {test: /\.(png|jpg)$/, loader: 'url?limit=8192'},
      {test: /\.css$/, loader: 'style!css!less'},
      {test: /\.eot/, loader : 'file?prefix=font/'},
      {test: /\.woff/,loader : 'file?prefix=font/&limit=10000&mimetype=application/font-woff'},
      {test: /\.ttf/, loader : 'file?prefix=font/'},
      {test: /\.svg/, loader : 'file?prefix=font/'},
      {test: /\.otf/, loader : 'file?prefix=font/'},
    ]
  },
  plugins: [
    // new webpack.HotModuleReplacementPlugin(),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery'
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: "vendor.js",
      // (Give the chunk a different name)
      minChunks: Infinity,
      // (with more entries, this ensures that no other module
      //  goes into the vendor chunk)
    })
    ,
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ],
  resolve: {
    root: [process.cwd() + '/web', process.cwd() + '/node_modules'],
    extensions: ['', '.js', '.json', '.coffee', '.css']
  }
}
