const createExpoWebpackConfigAsync = require('@expo/webpack-config');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path');

module.exports = async function(env, argv) {
  const config = await createExpoWebpackConfigAsync(env, argv);
  config.resolve.alias['victory-native$'] = 'victory';
  config.entry = {
    app: [__dirname + '/node_modules/expo/AppEntry.js']
  };

  config.output = {
    path: path.resolve(__dirname, 'web-build'),
    filename: 'bundles/[name].[chunkhash].min.js',
    sourceMapFilename: 'maps/[name].[chunkhash].map.js'
  };

  config.devServer = {};
  config.mode = 'production';
  config.plugins = [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin(),
    new webpack.HashedModuleIdsPlugin() // so that file hashes don't change unexpectedly
  ];

  config.optimization = {
    runtimeChunk: 'single',
    splitChunks: {
      chunks: 'all',
      maxInitialRequests: Infinity,
      minSize: 0,
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name(module) {
            // get the name. E.g. node_modules/packageName/not/this/part.js
            // or node_modules/packageName
            const packageName = module.context.match(
              /[\\/]node_modules[\\/](.*?)([\\/]|$)/
            )[1];

            // npm package names are URL-safe, but some servers don't like @ symbols
            return `npm.${packageName.replace('@', '')}`;
          }
        }
      }
    }
  };
  return config;
};
