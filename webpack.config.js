var path = require('path');
var webpack = require('webpack');
var BrowserSyncPlugin = require('browser-sync-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin')
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var pkg = require('./package.json');

module.exports = {
  devtool: 'source-map',
  entry: {
    main: [
      'webpack-dev-server/client?http://localhost:3000',
      'webpack/hot/only-dev-server',
      './app/index.js'
    ],
    //vendor: Object.keys(pkg.dependencies)
  },
  output: {
    filename: '[name].js',
    path: path.join(__dirname, 'public'),
    publicPath: '/'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new ExtractTextPlugin('index.css'),
    new HtmlWebpackPlugin({
      template: 'app/index.pug'
    }),
    new BrowserSyncPlugin({
      // browse to http://localhost:3000/ during development,
      // ./public directory is being served
      host: 'localhost',
      port: 3000,
      server: { baseDir: ['public'] }
    })
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        include: path.join(__dirname, 'app'),
        loader: 'ng-annotate!babel'
      },
      {
        test: /\.scss$/,
        include: path.join(__dirname, 'app'),
        // loader: 'style!css!sass',
        loader: ExtractTextPlugin.extract('style-loader',['css-loader', 'sass-loader']),
      },
      {
        test: /\.pug$/,
        include: path.join(__dirname, 'app'),
        loader: 'pug'
      },
    ]
  }
}
