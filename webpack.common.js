const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/template.html'
    })
  ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          'style-loader',  //3. Inject styles into DOM
          'css-loader',   //2. Turns css into commonjs
          'sass-loader'  //1. Turns sass into css
        ]
      },
      {
        test: /\.html$/,
        use: ['html-loader']
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/i,
        // use: {
        //   loader: 'file-loader',
        //   options: {
        //     name: '[name].[ext]',
        //     outputPath: 'images'
        //   }

        // },
        type: 'asset/resource',
      },
    ],
  },
};