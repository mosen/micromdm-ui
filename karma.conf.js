const webpackConfig = require('./webpack.config');

module.exports = function(config) {
  'use strict';
  config.set({
    basePath: '.',
    browsers: [
      'Safari'
    ],
    plugins: [
      'karma-webpack',
      'karma-sourcemap-loader',
      'karma-mocha',
      'karma-safari-launcher'
    ],
    frameworks: ['mocha'],
    files: [
      'test/**/*Test.js'
    ],
    preprocessors: {
      'test/**/*Test.js': ['webpack', 'sourcemap']
    },
    webpack: webpackConfig
  });
};
