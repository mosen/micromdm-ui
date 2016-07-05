const webpackConfig = require('./webpack.config.test');

module.exports = function (config) {
  'use strict';

  config.set({
    browsers: [
      'Safari'
    ],
    plugins: [
      'karma-webpack',
      'karma-sourcemap-loader',
      'karma-mocha',
      'karma-coverage',
      'karma-safari-launcher',
      'karma-phantomjs-launcher'
    ],
    frameworks: ['mocha'],
    files: [
      '../test/**/*Test.js'
    ],
    preprocessors: {
      '../test/**/*Test.js': [
        'webpack', 'sourcemap'
      ]
    },
    webpack: Object.assign({}, webpackConfig, {
      externals: {
        cheerio: 'window'
      }
    })
  });
};
