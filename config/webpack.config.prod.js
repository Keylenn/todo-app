/*
* 生产环境webpack配置
*loader:[]
* plugins: [optimize-css-assets-webpack-plugin, uglifyjs-webpack-plugin]
* */
const  { baseConfig, join } = require("./webpack.config.base");
const merge = require("webpack-merge");
const CleanWebpackPlugin = require('clean-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CompressionPlugin = require("compression-webpack-plugin");


const prodConfig = merge(baseConfig, {
  mode: "production",
  performance: {
    hints: 'warning'
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        uglifyOptions: {
          compress: {
            warnings: false,
          }
        }
      }),
      new OptimizeCSSAssetsPlugin({})
    ]
  },
  plugins:[
    new CleanWebpackPlugin(['dist'], {
      root: join(''),
      exclude: ['manifest.json', 'vendor.dll.js'],
      verbose: true,
      dry:  false
    }),
    new CompressionPlugin({
      filename: '[path].gz[query]',
      algorithm: 'gzip',
      test: /\.(js|css)/,
      threshold: 10 * 1024,
      minRatio: 0.8
    })
  ]
});

module.exports = prodConfig;