const createExpoWebpackConfigAsync = require('@expo/webpack-config');
const webpack = require('webpack');
module.exports = async function(env, argv) {
  const config = await createExpoWebpackConfigAsync(env, argv);
  config.resolve.alias['victory-native$'] = 'victory';
  config.mode = 'production';
  config.plugins = [
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
