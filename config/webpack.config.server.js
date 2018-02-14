const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const entryFile = '../src/Server/index.js';
const outputPath = path.resolve(__dirname, '../build');

module.exports = {
  target: 'node',
  cache: false,
  context: __dirname,
  devtool: 'source-map',
  entry: entryFile,
  output: {
    path: outputPath,
    filename: 'server.js',
  },
  module: {
    loaders: [
      { test: /\.json$/, loaders: ['json-loader'] },
      {
        test: /\.jsx?$/,
        loaders: ['babel-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.(ico|gif|png|jpg|jpeg|svg|webp)$/,
        loaders: ['file?context=static&name=/[path][name].[ext]'],
        exclude: /node_modules/,
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        loader: 'file?name=public/fonts/[name].[ext]',
      },
    ],
    noParse: /\.min\.js/,
  },
  node: {
    __dirname: false,
    fs: 'empty',
  },
};
