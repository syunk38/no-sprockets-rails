module.exports = {
  entry: './app/assets/javascripts/application.js',
  output: {
    path: __dirname + '/public',
    filename: 'application.js'
  },
  module: {
    loaders: [
      { test: /\.coffee$/, loader: "coffee" }
    ]
  }
}
