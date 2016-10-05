switch (process.env.NODE_ENV) {
  case 'production':
    console.info("Using production webpack configuration");
    module.exports = require('./.config/webpack.config.prod');
    break;
  case 'test':
    console.info("Using test webpack configuration");
    module.exports = require('./.config/webpack.config.test');
    break;
  default:
    console.info("Using dev webpack configuration");
    module.exports = require('./.config/webpack.config.dev');
}
