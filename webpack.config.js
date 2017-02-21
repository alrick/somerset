const webpack = require('webpack')

module.exports = {
  entry: `${__dirname}/src/app.js`,
  output: {
    path: `${__dirname}/build`,
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets: [
            ['es2015', { 'modules': false }]
          ]
        }
      }
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin()
  ]
}
