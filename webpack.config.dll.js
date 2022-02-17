const webpack = require('webpack')
const path = require('path')
module.exports = {
  entry: {
    vue: [
      'vue',
    ],
  },
  output: {
    filename: '[name].js',
    path: path.join(__dirname, 'library/'),
    library: '[name]',
  },
  plugins: [
    new webpack.DllPlugin({
      name: '[name]',
      context: __dirname,
      path: path.join(__dirname, 'library/[name].json')
    })
  ],
  mode: 'production'
}