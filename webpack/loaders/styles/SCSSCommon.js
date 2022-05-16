const DEV_LOADER = {
  loader: 'style-loader',
  options: {
    injectType: 'singletonStyleTag'
  }
}

const PROD_LOADER = {
  loader: "postcss-loader",
  options: {
    postcssOptions: {
      plugins: [
        ["autoprefixer"],
      ],
    },
  }
}

module.exports = function (loader) {
  return {
    test: /\.common\.s[ac]ss$/,
    exclude: /(node_modules|bower_components)/,
    use: [!loader ? DEV_LOADER : loader,
      'css-loader',
    !loader ? 'sass-loader' : PROD_LOADER && 'sass-loader'
    ]
  }
}