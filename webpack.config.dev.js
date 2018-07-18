const merge = require('webpack-merge');
const webpack = require('webpack');
const webpackConfig = require('./webpack.config');

module.exports = merge(webpackConfig, {
  devServer: {
    port: 3030,
    hot: true,
    open: true,
    publicPath: '/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  devtool: 'inline-source-map'

});
