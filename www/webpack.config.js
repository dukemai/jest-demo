const path = require('path');
const webpack = require('webpack');

const clientFolder = path.join(__dirname, 'client');

module.exports = {
  entry: {
    bundle: './client/app.js',
    vendor: ['react', 'react-dom', 'scroll-to', 'socket.io-client', 'query-string']
  },
  output: {
    filename: '[name].js',
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
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: 'vendor.js',
    }),   
  ],
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './javascripts/',
    compress: true,
    port: 9000,
  }
};