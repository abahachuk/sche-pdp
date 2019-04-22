const webpack = require('webpack');
const { resolve } = require('path');
const webpackMerge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const WEBCOMPONENTS_PATH = './node_modules/@webcomponents/webcomponentsjs';
const modeConfig = env => require(`./webpack.${env.mode}.js`)(env);

const polyfills = [
  {
    from: resolve(`${WEBCOMPONENTS_PATH}/webcomponents-*.{js,map}`),
    to: 'vendor',
    flatten: true,
  }, {
    from: resolve(`${WEBCOMPONENTS_PATH}/bundles/*.{js,map}`),
    to: 'vendor/bundles',
    flatten: true,
  }, {
    from: resolve(`${WEBCOMPONENTS_PATH}/custom-elements-es5-adapter.js`),
    to: 'vendor',
    flatten: true,
  },
];

module.exports = ({ mode, presets }) =>
  webpackMerge({
    mode,
    output: {
      filename: '[name].[chunkhash:8].js',
    },
    module: {
      rules: [
        {
          test: /\.js/,
          exclude: /node_modules/,
          loader: 'babel-loader',
          options: {
            plugins: ['@babel/plugin-syntax-dynamic-import'],
            presets: [
              ['@babel/preset-env', {
                targets: {
                  chrome: 52,
                },
              }],
            ],
          },
        }],
    },
    plugins: [
      new CleanWebpackPlugin(),
      new webpack.ProgressPlugin(),
      new HtmlWebpackPlugin({ template: 'src/index.html' }),
      new CopyWebpackPlugin(polyfills),
    ],
  },
  modeConfig({ mode, presets }),
  );
