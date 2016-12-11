const ExtractTextPlugin = require('extract-text-webpack-plugin')
const AssetsPlugin = require('assets-webpack-plugin')
const webpack = require('webpack')

const isDevMode = process.env.NODE_ENV === 'development'

const fileName = isDevMode ? '[name]' : '[name]_[hash]'
const devtool = isDevMode ? 'inline-source-map' : 'eval'
const plugins = [new ExtractTextPlugin(`${fileName}.css`)]

if(!isDevMode) {
  plugins.push(new AssetsPlugin({path: __dirname + '/app/views', fullPath: false})) // manifest
  plugins.push(new webpack.optimize.UglifyJsPlugin()) // minify
}

module.exports = {
  entry: {
    application: [
      './app/assets/javascripts/application.js',
      './app/assets/stylesheets/application.scss'
    ]
  },
  output: {
    path: __dirname + '/public/',
    publicPath: __dirname + '/public/',
    filename: `${fileName}.js`
  },
  module: {
    loaders: [
      { test: /\.coffee$/, loader: 'coffee' },
      { test: /\.scss/, loader: ExtractTextPlugin.extract('style', 'css?sourceMap!sass?sourceMap') }
    ]
  },
  resolve: {
    root: __dirname + '/assets/',
    extensions: ['', '.js', '.js.coffee', '.sass']
  },
  devtool,
  plugins
}
