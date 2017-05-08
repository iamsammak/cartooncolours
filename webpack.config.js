const path = require('path');

module.exports = {
  context: __dirname,
  entry: "./js/cartooncolours.js",
  output: {
    path: path.join(__dirname, 'js'),
    filename: "bundle.js"
  },
  resolve: {
    extensions: ['.js', '.jsx', "*"]
  },
  module: {
    loaders: [
      {
        test: [/\.jsx?$/, /\.js?$/],
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
  devtool: 'source-map',
};
