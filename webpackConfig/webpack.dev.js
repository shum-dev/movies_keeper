const path = require('path');

const { merge } = require('webpack-merge');
const common = require('./webpack.common.js')();

module.exports = merge(common, {
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ]
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build'),
  },
  devServer: {
    port: 3000,
    hot: true,
    historyApiFallback: true,
  },
});
