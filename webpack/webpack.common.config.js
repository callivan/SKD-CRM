const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const JSLoader = require('./loaders/scripts/JS');
const TSLoader = require('./loaders/scripts/TS');
const TSXLoader = require('./loaders/scripts/TSX');
const FontLoader = require('./loaders/files/font');


module.exports = {
  entry: {
    app: ["@babel/polyfill", path.resolve(__dirname, '../src/index.tsx')],
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, '../dist'),
    clean: true,
    publicPath: '/'
  },
  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js", ".json"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../src/assets/templates/index.html'),
      favicon: path.resolve(__dirname, '../src/assets/imgs/favicon.png')
    }),
  ],
  module: {
    rules: [
      JSLoader,
      TSLoader,
      TSXLoader,
      FontLoader
    ]
  }
}