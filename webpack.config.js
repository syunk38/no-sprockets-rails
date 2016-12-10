var webpack = require('webpack')
var ExtractTextPlugin = require("extract-text-webpack-plugin")

module.exports = {
  entry: {
    application: './app/assets/javascripts/application.js',
    application: './app/assets/stylesheets/application.scss'
  },
  output: {
    path: __dirname + '/public',
    filename: '[name].js'
  },
  module: {
    loaders: [
      { test: /\.coffee$/, loader: "coffee" },
      { test: /\.scss/, loader: ExtractTextPlugin.extract("style-loader", "css-loader!sass-loader") }
    ]
  },
  plugins: [
    //new webpack.optimize.UglifyJsPlugin(),  // minify
    new ExtractTextPlugin("[name].css")
  ]
}
