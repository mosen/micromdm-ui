const path = require('path');
const productionConfig = require('./webpack.config.prod');

const config = Object.assign({}, productionConfig, {
  devtool: 'source-map',
  devServer: {
    port: 4000,
    inline: true,
    hot: true
  },
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'js/[name].bundle.js',
    publicPath: 'http://localhost:4000/'
  }
});

module.exports = config;
