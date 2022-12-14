const path = require('path');
const common = require("./webpack.common");
const merge = require("webpack-merge");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // mode: 'development',
  mode: 'production',
  // devtool:  "false",
  entry: './src/index.js',
  output: {
    filename: "[name].[contentHash].bundle.js",
    // filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
  optimization: {
    minimizer: [
      new OptimizeCssAssetsPlugin(),
      new TerserPlugin(),
      new HtmlWebpackPlugin({
        template: "./src/template.html",
        minify: {
          removeAttributeQuotes: true,
          collapseWhitespace: true,
          removeComments: true
        }
      })
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({ filename: "[name].[contentHash].css" }),
    new CleanWebpackPlugin()
  ],
  module: {
    rules: [
      {
        // test: /\.css$/,
        // use: ['style-loader', 'css-loader'],
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader, 
          // 'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
    ],
  },
};