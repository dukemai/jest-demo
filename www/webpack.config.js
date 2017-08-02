const path = require('path');

const clientFolder = path.join(__dirname, 'client');

module.exports = {
  entry: './client/app.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public/javascripts/')
  },
  module: {
    loaders: [
      {
        test: clientFolder,
        loader: 'babel-loader',
        query: {
          cacheDirectory: 'babel_cache',
          presets: ['es2015', 'stage-2', 'react'],
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './javascripts/',
    compress: true,
    port: 9000,
  }
};