/*
* 开发环境webpack配置
* loader:[]
* plugins: [webpack.HotModuleReplacementPlugin]
* */

const  { baseConfig, join } = require("./webpack.config.base");
const merge = require("webpack-merge");
const webpack = require("webpack");

const devCofig = merge(baseConfig, {
  mode: "development",
  devtool: "cheap-module-eval-source-map",
  devServer: {
    contentBase: join("dist"),
    port: 8003,
    compress: true,
    hot: true,
    stats: {
      timings: true,
      modules: false,
      assets: false,
      entrypoints: false,
      assetsSort: 'field',
      builtAt: false,
      cached: false,
      cachedAssets: false,
      children: false,
      chunks: false,
      chunkGroups: false,
      chunkModules: false,
      chunkOrigins: false,
      performance: true,
      errors: true,
      warnings: true,
    }
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
});

module.exports = devCofig;