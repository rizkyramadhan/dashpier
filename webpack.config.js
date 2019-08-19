const createExpoWebpackConfigAsync = require('@expo/webpack-config');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const fs = require('fs');
module.exports = async function(env, argv) {
  const config = await createExpoWebpackConfigAsync(env, argv);
  config.resolve.alias['victory-native$'] = 'victory';

  config.entry = {
    app: [__dirname + '/node_modules/expo/AppEntry.js']
  };


  if (process.env.npm_lifecycle_event !== 'build:web') {
    return config;
  }

  config.devServer = {};
  config.mode = 'production';
  delete config.devtool;
  config.plugins.push(new CleanWebpackPlugin());
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
