const postcssAssets = require('postcss-assets');
const postcssPresetEnv = require('postcss-preset-env');

module.exports = {
  plugins: [
    postcssAssets({
      loadPaths: ["./src/assets/img"]
    }),
    postcssPresetEnv
  ]
}
