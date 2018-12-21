/*
* 生产环境webpack配置
*loader:[]
* plugins: [optimize-css-assets-webpack-plugin, uglifyjs-webpack-plugin]
* */
const  { baseConfig } = require("./webpack.config.base");
const merge = require("webpack-merge");
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin'); //优化压缩css
const UglifyJsPlugin = require('uglifyjs-webpack-plugin'); //压缩js

const prodConfig = merge(baseConfig, {
  mode: "production",
  performance: { //webpack 性能提示，当文件大小超过 250kb 时的提示方式
    hints: 'warning'
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        /*
         * 选项配置参考：https://blog.csdn.net/u013884068/article/details/83511343
         * https://www.cnblogs.com/tugenhua0707/p/9569762.html
         * */
        uglifyOptions: {
          compress: {
            warnings: false, //不输出警告信息
          }
        },
        parallel: true //使用多进程并行运行来提高构建速度
      }),
      new OptimizeCSSAssetsPlugin({})
    ]
  }
});

module.exports = prodConfig;