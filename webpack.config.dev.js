const path = require('path');
const webpack = require('webpack');
const failPlugin = require('webpack-fail-plugin');

module.exports = {
  devtool: "cheap-eval-source-map",
  entry: [
    "webpack-dev-server/client?http://localhost:3000",
    "webpack/hot/only-dev-server",
    "./src/index.tsx",
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/',
  },
  module: {
    loaders: [{
      test: /\.tsx?$/,
      loader: "ts-loader",
    }],
  },
  plugins: [
    /* failPlugin, */
    new webpack.HotModuleReplacementPlugin(),
  ],
  resolve: {
    extensions: ["", ".webpack.js", ".web.js", ".ts", ".tsx", ".js"],
  },
};
