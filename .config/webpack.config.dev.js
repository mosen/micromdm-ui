const path = require('path');
const productionConfig = require('./webpack.config.prod');

const config = Object.assign({}, productionConfig, {
  devtool: 'source-map',
  output: {
    path: path.join(__dirname, '..', 'public'),
    filename: 'js/[name].dev.bundle.js',
    publicPath: 'http://localhost:4000/'
  }
});

module.exports = config;
