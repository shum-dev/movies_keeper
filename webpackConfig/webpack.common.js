const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const env = require('dotenv').config().parsed;

module.exports = () => {

  const envKeys = Object.keys(env).reduce((acc,item) => {
    acc[`process.env.${item}`] = JSON.stringify(env[item]);
    return acc;
  }, {});

  return {
    entry: './src/index.tsx',
    module: {
      rules: [
        {
          test: /\.(ts|tsx|js|jsx)$/,
          exclude: /(node_modules)/,
          loader: "babel-loader",
        },
        {
          test: /\.(svg|png|jpe?g|gif)$/,
          use: {
            loader: 'file-loader',
            options: {
              name: '[name].[hash].[ext]',
              outputPath: 'images'
            }
          }
        }
      ]
    },
    resolve: { extensions: ["*", ".ts", ".tsx", ".js", ".jsx"] },
    plugins: [
      new HtmlWebpackPlugin({
        template: './public/index.html',
        inject: 'body'
      }),
      new webpack.DefinePlugin(envKeys),
    ],
  };
};
