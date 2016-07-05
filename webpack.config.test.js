const devConfig = require('./webpack.config');

const config = Object.assign({}, devConfig, {
  devtool: 'source-map',
  output: {},
  devServer: null,
  postcss: null
});

module.exports = config;
