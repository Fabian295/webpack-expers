const path = require('path');
const common = require("./webpack.common.js");
const { merge } = require("webpack-merge");
// var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(common, {
  mode: 'production',
  // devtool:  "false",
  // entry: './src/index.js',
  output: {
    filename: 'main.[contentHash].js',
    path: path.resolve(__dirname, 'dist')
  }
});