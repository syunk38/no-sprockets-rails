var webpack = require('webpack')
var ExtractTextPlugin = require("extract-text-webpack-plugin")
var AssetsPlugin = require('assets-webpack-plugin')

module.exports = {
  entry: {
    application: './app/assets/javascripts/application.js',
    application: './app/assets/stylesheets/application.scss'
  },
  output: {
    path: __dirname + '/public',
    filename: '[name]_[hash].js'
  },
  module: {
    loaders: [
      { test: /\.coffee$/, loader: "coffee" },
      { test: /\.scss/, loader: ExtractTextPlugin.extract("style-loader", "css-loader!sass-loader") }
    ]
  },
  plugins: [
    //new webpack.optimize.UglifyJsPlugin(),  // minify
    new ExtractTextPlugin("[name]_[hash].css"),
    new AssetsPlugin({path: __dirname + '/app/views'})
  ]
}
