const path = require('path');
const Pkg = require('./package');
const args = require('yargs').argv;
const glob = require('glob');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const IS_DEV = (process.env.NODE_ENV === 'dev');
const renderHtmlTemplates = () =>
  glob.sync('src/*.html').map(dir => new HtmlWebpackPlugin({
    // Output
    filename: path.basename(dir),
    meta: {
      viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no',
      charset: 'utf-8'
    },
    template: dir,
    title: Pkg.description,
    publicPath: args.git ? '/evolve-webpack/' : ''
  }));

/**
 * Webpack Configuration
 */

module.exports = {
  entry: {
    index: './src/index.js',
    schedule: './src/schedule.js',
    talent: './src/talent.js',
    dining: './src/dining.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'scripts/[name].js'
  },
  module: {
    rules: [
      // JS
      {
        test: /\.js$/,
        include: [
          path.resolve(__dirname, 'src')
        ],
        use: [
          'babel-loader'
        ]
      },

      // SCSS
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                minimize: !IS_DEV,
                sourceMap: IS_DEV,
                publicPath: '../'
              }
            },
            {
              loader: 'postcss-loader',
              options: {
                sourceMap: IS_DEV,
                plugins: [
                  require('postcss-flexbugs-fixes'),
                  require('autoprefixer')({
                    browsers: ['last 3 versions']
                  })
                ]
              }
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: IS_DEV
              }
            }
          ]
        })
      },

      // FONTS/IMAGES
      {
        test: /\.(woff|woff2|ttf|eot|otf|svg|gif|png|jpe?g)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000,
              name (file) {
                if (file.indexOf('fonts') > - 1) {
                  return 'fonts/[name].[ext]';
                }
                else {
                  return 'images/[name].[ext]';
                }
              },
              fallback: 'file-loader',
              publicPath: args.git ? '/evolve-webpack/' : '/'
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      IS_DEV
    }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery'
    }),
    ...renderHtmlTemplates(),
    new ExtractTextPlugin({
      filename: 'styles/[name].css'
    })
  ]
};
