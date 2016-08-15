const path = require('path')

module.exports = {
  devtool: '#eval-source-map',
  entry: {
    app: ['./src/index.ts']
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/dist/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        loader: 'ts'
      }
    ]
  }
}
