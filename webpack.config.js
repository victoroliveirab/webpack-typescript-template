const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const entryFile = './src/index.ts';
const outDir = './www';

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  entry: {
    main: entryFile,
  },
  output: {
    path: path.resolve(__dirname, outDir),
    filename: 'index.js',
    publicPath: '/',
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './public/index.html',
      inject: 'body',
    }),
  ],
  watchOptions: {
    ignored: /node_modules/,
  },
};
