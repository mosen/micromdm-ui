const path = require('path');
const autoprefixer = require('autoprefixer');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: {
    app: [
      './src/js/main.js'
    ]
  },
  output: {
    path: path.join(__dirname, '..', 'public'),
    filename: 'js/[name].bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          cacheDirectory: true,
          plugins: [
            'transform-runtime',
            'transform-class-properties',
            'transform-object-rest-spread'
          ],
          presets: ['es2015', 'react'],
          env: {
            development: {
              plugins: [
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
      }
    ]
  },
  plugins: [
    new CopyWebpackPlugin([
      { from: "src/sass/icons", to: "." }
    ], {

    }),
    new ExtractTextPlugin('css/[name].css', {
      publicPath: '/css/',
      allChunks: true
    })
  ],
  postcss: [autoprefixer]
};
