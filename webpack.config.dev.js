const merge = require('webpack-merge');
const _ = require('lodash');
const path = require('path');
const webpack = require('webpack');
const system = require('systemjs');
const viewDir = './src/views/';
const {lstatSync, readdirSync} = require('fs');
const {join} = require('path');
const isDirectory = source => lstatSync(source).isDirectory();
const getDirectories = source =>
  readdirSync(source).map(name => join(source, name)).filter(isDirectory);
const webpackConfig = require('./webpack.config');

module.exports = merge(webpackConfig, {
  devServer: {
    port: 3030,
    hot: true,
    open: true,
    before: function (app) {
      _.each(getDirectories(viewDir), function (vd) {
        console.log(vd.slice(vd.lastIndexOf('/')));
        app.get(vd.slice(vd.lastIndexOf('/')), function (req, res) {
          console.info('req url:' + req.url);
          console.info('vd:' + vd);

          system.import('./' + vd + '.js').then((a,b) => {
            console.log(a,b);
            res.json({html: b});
          })
        });
      })
    }
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  devtool: 'inline-source-map'

});
