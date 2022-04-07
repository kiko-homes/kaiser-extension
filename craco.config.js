const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  webpack: {
    configure: (webpackConfig, { env }) => {
      return {
        ...webpackConfig,
        entry: {
          // static configuration to be picked up after build in manifest.json
          main: './src/scripts/background/main/index.ts',
          // copying files outside of main bundle
          ['show-capturer']: './src/scripts/content/show-capturer/index.ts',
        },
        output: {
          ...webpackConfig.output,
          filename: 'lib/[name].js',
        },
        optimization: {
          ...webpackConfig.optimization,
          // deoptimise runtime chunk as it's not supported in extensions
          runtimeChunk: false,
        },
        // HACK: Webpack5 issue
        resolve: {
          ...webpackConfig.resolve,
          fallback: {
            ...webpackConfig.resolve.fallback,
            url: require.resolve('url'),
          },
        },
        // Required to see sourcemaps in extensions, as extensions currently do not support .js.map files
        devtool: 'inline-source-map',
        // Copying icons and manifest.json to /build during dev build
        plugins: [
          ...webpackConfig.plugins,
          new CopyPlugin({
            patterns: [
              { from: 'public/manifest.json', to: '' },
              { from: 'public/icons', to: 'icons' },
              { from: 'node_modules/single-file/lib/web', to: 'lib/web' },
              {
                from: 'node_modules/single-file/lib/chrome-browser-polyfill.js',
                to: 'lib',
              },
              {
                from: 'node_modules/single-file/lib/single-file-bootstrap.js',
                to: 'lib',
              },
              {
                from: 'node_modules/single-file/lib/extension-core.js',
                to: 'lib',
              },
              {
                from: 'node_modules/single-file/lib/single-file.js',
                to: 'lib',
              },
            ],
          }),
        ],
      };
    },
  },
  // Saving js files to /build during dev build
  devServer: (devServerConfig) => {
    devServerConfig.devMiddleware.writeToDisk = true;
    devServerConfig.hot = false;
    devServerConfig.port = 8181;
    devServerConfig.liveReload = false;
    return devServerConfig;
  },
};
