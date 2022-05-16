const { merge } = require('webpack-merge');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')
const common = require('./webpack.common.config');
const SCSSLocalLoader = require('./loaders/styles/SCSSLocal');
const SCSSCommonLoader = require('./loaders/styles/SCSSCommon');
const ImgLoader = require('./loaders/files/img');

module.exports = merge(common, {
  mode: 'development',
  plugins: [new ReactRefreshWebpackPlugin()],
  module: {
    rules: [
      SCSSCommonLoader(),
      SCSSLocalLoader(),
      ImgLoader(false)
    ]
  },
  devServer: {
    historyApiFallback: true,
    port: 3000,
    hot: true,
    client: {
      reconnect: true,
    },
  },
  devtool: 'source-map'
});