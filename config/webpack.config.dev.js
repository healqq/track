const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpackConfig = require('@shyftplan/js-config/webpack/webpack.config.dev');
const aliases = require('./webpack.aliases');

/**
 * This config is used by eslint, and eslint uses built-in
 * in vs code node version(crazy, right?)
 * Object spread doesn't work
 * (1h killed)
 */

module.exports = Object.assign(
  {},
  webpackConfig,
  {
    entry: ['./index.ts'],
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, '../dist'),
    },
    devtool: 'source-map',
    plugins: [
      new HtmlWebpackPlugin(),
      new webpack.HotModuleReplacementPlugin(),
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: '"production"',
        },
      }),
    ],
    resolve: Object.assign(
      {},
      webpackConfig.resolve,
      {
        alias: Object.assign({}, webpackConfig.resolve.alias, aliases),
      },
    ),
  },
);
