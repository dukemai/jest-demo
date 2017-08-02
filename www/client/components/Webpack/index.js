import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '../share';

import './style.scss';

const propTypes = {
}

const defaultProps = {
}

const webpackScript = `module.exports = {
  entry: {
    bundle: path.join(__dirname, 'client', 'index.js'),
    vendor: ['react', 'lodash', ...],
  },
  output: {
    path: path.join(__dirname, 'public', 'dist', 'scripts'),
    publicPath: '/dist/scripts/',
    filename: '[name].js',
  },
  module: {
    loaders: [
      {
        test: path.join(__dirname, 'client'),
        loader: 'babel-loader',
        query: {
          cacheDirectory: 'babel_cache',
          presets: ['es2015', 'stage-0', 'react'],
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new Dotenv({
      path: './.env',
      safe: false,
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: 'vendor.js',
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new UglifyJsPlugin({ sourceMap: true }),
    new ProgressBarPlugin({
      clear: false,
    }),
  ],
  devServer: {
    contentBase: '/dist/scripts/',
    compress: true,
    port: 9000,
  },
};
`
const content = (
    <div>
        <p>
            <strong>Webpack</strong> <small>@version 2</small>    
        </p>
        <pre>
            {webpackScript}
        </pre>
    </div>            
)

const Webpack = () => (
    <Box 
        boxImage="/images/webpack.svg"
        content={content}
        className="webpack-box"
    />            
)

Webpack.propTypes = propTypes;
Webpack.defaultProps = defaultProps;

export default Webpack;