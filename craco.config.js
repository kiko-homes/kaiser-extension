const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  webpack: {
    configure: (webpackConfig, { env }) => {
      return {
        ...webpackConfig,
        entry: {
          main: [
            env === 'development' &&
              require.resolve('react-dev-utils/webpackHotDevClient'),
            './src/scripts/background/main/index.ts',
          ].filter(Boolean),
          // copying files outside of main bundle
          ['show-capturer']: './src/scripts/content/show-capturer/index.ts',
          ['chrome-browser-polyfill']:
            'single-file/lib/chrome-browser-polyfill.js',
          ['single-file-bootstrap']: 'single-file/lib/single-file-bootstrap.js',
          ['extension-core']: 'single-file/lib/extension-core.js',
          ['single-file']: 'single-file/lib/single-file.js',
          ['hooks-web']: {
            import: 'single-file/lib/web/hooks/hooks-web.js',
            filename: 'lib/web/hooks/hooks-web.js',
          },
          ['hooks-frames-web']: {
            import: 'single-file/lib/web/hooks/hooks-frames-web.js',
            filename: 'lib/web/hooks/hooks-frames-web.js',
          },
        },
        output: {
          ...webpackConfig.output,
          filename: 'lib/[name].js',
        },
        optimization: {
          ...webpackConfig.optimization,
          runtimeChunk: false,
        },
        devtool: 'inline-source-map',
      };
    },
  },
};
