const devConfig = require('./webpack.config.dev');

const config = Object.assign({}, devConfig, {
  devtool: 'source-map',
  output: null
});

module.exports = config;
