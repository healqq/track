const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpackConfig = require('@shyftplan/js-config/webpack/webpack.config.prod.js');
const aliases = require('./webpack.aliases');

module.exports = {
  ...webpackConfig,
  entry: {
    'example-js-project': './index.js',
  },
  resolve: Object.assign(
    {},
    webpackConfig.resolve,
    {
      alias: Object.assign({}, webpackConfig.resolve.alias, aliases),
    },
  ),
  output: {
    library: 'ExampleProject',
    libraryTarget: 'umd',
    filename: 'example.js',
    libraryExport: 'default',
    path: path.resolve(__dirname, '../dist'),
  },
  externals: {
    jquery: 'jquery',
    moment: 'moment',
  },
  plugins: [
    ...webpackConfig.plugins,
    new CleanWebpackPlugin(['dist'], {
      root: path.resolve(__dirname, '../'),
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"',
      },
    }),
    // uglify should be here, but everything breaks if we pass uglified code to ruby
  ],
};
