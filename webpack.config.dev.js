const path = require('path');

module.exports = {
  entry: "./src/index.tsx",
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/',
  },
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
