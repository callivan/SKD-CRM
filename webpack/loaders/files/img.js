module.exports = function (flag) {
  return {
    test: /\.(png|jpe?g|gif|svg|webp|ico)$/i,
    type: !flag ? 'asset/resource' : 'asset', generator: {
      filename: 'assets/imgs/[name][ext]'
    },
  }
}