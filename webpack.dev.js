const path = require('path');
const common = require("./webpack.common.js");
const { merge } = require("webpack-merge");
// var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(common, {
  mode: 'development',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
  // devServer: {
  //   static: './dist',
  // }
});