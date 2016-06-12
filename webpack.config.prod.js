const path = require('path');
const autoprefixer = require('autoprefixer');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    app: './src/js/main.js'
  },
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'js/[name].bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          cacheDirectory: true,
          plugins: ['transform-runtime'],
          presets: ['es2015', 'react'],
          env: {
            development: {
              plugins: [
                'transform-class-properties',
                ['react-transform', {
                  transforms: [{
                    transform: 'react-transform-hmr',
                    imports: ['react'],
                    locals: ['module']
                  }, {
                    transform: 'react-transform-catch-errors',
                    imports: ['react', 'redbox-react']
                  }]
                }]
              ]
            },
            production: {
              plugins: [
                'transform-react-remove-prop-types',
                'transform-react-constant-elements'
              ]
            }
          }
        }
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style', 'css!postcss')
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('style', 'css!postcss!resolve-url!sass?sourceMap')
      },
      {
        test: /\.woff(\?.*)?$/,
        loader: 'url?prefix=fonts/&name=fonts/[name].[ext]&limit=10000&mimetype=application/font-woff'
      },
      {
        test: /\.woff2(\?.*)?$/,
        loader: 'url?prefix=fonts/&name=fonts/[name].[ext]&limit=10000&mimetype=application/font-woff2'
      },
      {
        test: /\.otf(\?.*)?$/,
        loader: 'file?prefix=fonts/&name=fonts/[name].[ext]&limit=10000&mimetype=font/opentype'
      },
      {
        test: /\.ttf(\?.*)?$/,
        loader: 'url?prefix=fonts/&name=fonts/[name].[ext]&limit=10000&mimetype=application/octet-stream'
      },
      {
        test: /\.eot(\?.*)?$/,
        loader: 'file?prefix=fonts/&name=fonts/[name].[ext]'
      },
      {
        test: /\.svg(\?.*)?$/,
        loader: 'url?prefix=fonts/&name=fonts/[name].[ext]&limit=10000&mimetype=image/svg+xml'
      },
      {
        test: /\.(png|jpg)$/,
        loader: 'url?limit=8192'
      },
      {
        test: /(foundation\.core)/,
        loader: 'imports?jQuery=jquery!exports?foundation=jQuery.fn.foundation,Foundation=window.Foundation'
      },
      {
        test: /foundation-sites\/js/, loader: 'imports?$=jquery,jQuery=jquery'
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('css/[name].css', {
      publicPath: '/css/',
      allChunks: true
    })
  ],
  postcss: [autoprefixer],
  resolve: {
    alias: {
      'foundation.core': 'foundation-sites/js/foundation.core',
      'foundation.util.keyboard': 'foundation-sites/js/foundation.util.keyboard',
      'foundation.util.box': 'foundation-sites/js/foundation.util.box',
      'foundation.util.mediaQuery': 'foundation-sites/js/foundation.util.mediaQuery',
      'foundation.util.motion': 'foundation-sites/js/foundation.util.motion',
      'foundation.util.nest': 'foundation-sites/js/foundation.util.nest',
      'foundation.dropdownMenu': 'foundation-sites/js/foundation.dropdownMenu',
      'foundation.responsiveToggle': 'foundation-sites/js/foundation.responsiveToggle'
    }
  }
};
