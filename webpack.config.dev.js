const path = require('path');
const webpack = require('webpack');

module.exports = {
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
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
  devtool: "source-map",
  resolve: {
    extensions: ["", ".webpack.js", ".web.js", ".ts", ".tsx", ".js"],
  },
  module: {
    loaders: [{
      test: /\.tsx?$/,
      loader: "ts-loader",
    }],
    preLoaders: [{
      test: /\.js$/,
      loader: "source-map-loader",
    }],
  },
};
