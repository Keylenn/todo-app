/*
* 开发环境webpack配置
* loader:[]
* plugins: [webpack.HotModuleReplacementPlugin]
* */

const  { baseConfig } = require("./webpack.config.base");
const merge = require("webpack-merge");
const webpack = require("webpack");

const devCofig = merge(baseConfig, {
  mode: "development",
  devtool: "cheap-module-eval-source-map",
  devServer: {
    port: 8003,
    compress: true,
    hot: true,
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
});

module.exports = devCofig;