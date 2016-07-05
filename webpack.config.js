switch (process.env.NODE_ENV) {
  case 'production':
    module.exports = require('./.config/webpack.config.prod');
    break;
  case 'test':
    module.exports = require('./.config/webpack.config.test');
    break;
  default:
    module.exports = require('./.config/webpack.config.dev');
}
