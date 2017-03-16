const { resolve } = require('path');
const webpack = require('webpack');
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: [
    './index.js'
    // the entry point of our app
  ],
  output: {
    filename: 'bundle.js',
    // the output bundle

    path: resolve(__dirname, 'dist'),

    publicPath: '/'
    // necessary for HMR to know where to load the hot update chunks
  },

  context: resolve(__dirname, 'src'),

  devtool: 'inline-source-map',

  devServer: {
    hot: true,
    // enable HMR on the server

    contentBase: resolve(__dirname, 'dist'),
    // match the output path

    publicPath: '../public',
    // match the output `publicPath`
    port:9001
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          'babel-loader',
        ],
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader?modules',
          'postcss-loader',
        ],
      },
    ],
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new CopyWebpackPlugin([
        { from: '../dist/bundle.js', to: '../../public/js/bundle.js' },
    ])
  ],
};