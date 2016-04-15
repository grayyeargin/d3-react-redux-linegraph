/*
 * This is the 'production' config for webpack
 * The command 'npm run build' will use this config and create
 * minified css and js in the static folder (video-browser.css & .js)
 * 
 */


var path = require('path');
var webpack = require('webpack');

var ExtractTextPlugin = require("extract-text-webpack-plugin");
var CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");

module.exports = {
  entry: {
    'main-asset': './js/index.js'
  },
  output: {
    path: path.join(__dirname, 'static'),
    filename: '[name].js',
    publicPath: '/static/'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  plugins: [
    new ExtractTextPlugin("[name].css"),
    new webpack.DefinePlugin({
    'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    })
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel'],
        include: path.join(__dirname, 'js')
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract("style-loader", "css-loader!sass-loader"),
        include: path.join(__dirname, 'sass')
      },
      { 
        test: /\.(png|jpg|svg)$/, 
        loader: 'url-loader?limit=8192' 
      }
    ]
  }
};