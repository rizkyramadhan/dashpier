const createExpoWebpackConfigAsync = require('@expo/webpack-config');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin;
module.exports = async function(env, argv) {
  const config = await createExpoWebpackConfigAsync(env, argv);
  config.resolve.alias['victory-native$'] = 'victory';
  config.mode = 'production';

  config.plugins = [new BundleAnalyzerPlugin()];

  config.optimization = {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all'
        },
        icons: {
          test: /[\\/]node_modules\/@expo\/vector-icons[\\/]/,
          name: 'expo-icons',
          chunks: 'all'
        }
      }
    }
  };
  return config;
};
