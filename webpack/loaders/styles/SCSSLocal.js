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
    test: /\.s[ac]ss$/,
    exclude: /(node_modules|bower_components|\.common\.s[ac]ss$)/,
    use: [
      !loader ? DEV_LOADER : loader,
      {
        loader: 'css-loader',
        options: {
          modules: {
            mode: 'local',
            localIdentName: "[local]",
          },
        }
      }, !loader ? 'sass-loader' : PROD_LOADER && 'sass-loader'
    ]
  }
}