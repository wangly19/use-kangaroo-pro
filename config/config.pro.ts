import { defineConfig } from 'umi';
const AntdDayjsWebpackPlugin = require('antd-dayjs-webpack-plugin');

export default defineConfig({
  define: {
    APP_SELECT_KEY: 'key',
    ICON_FONT_URL: '//at.alicdn.com/t/font_2479004_mz3zxbz3pf.js',
    INTERFACE_URL: 'https://www.fastmock.site/mock/34aaa11d0784056080a17335de2e1751/api',
  },
  devtool: false,
  dynamicImportSyntax: {},
  dynamicImport: {},
  targets: {
    chrome: 79,
    firefox: false,
    safari: false,
    edge: false,
    ios: false,
  },
  chunks: ['antd', 'vendors.umi', 'umi'],
  chainWebpack: function (config) {
    config.optimization.splitChunks({
      chunks: 'all',
      automaticNameDelimiter: '.',
      name: true,
      minSize: 30000,
      maxSize: 0,
      minChunks: 1,
      maxAsyncRequests: 10,
      maxInitialRequests: 5,
      cacheGroups: {
        antd: {
          name: 'antd',
          chunks: 'all',
          test: /(@antd|antd|@ant-design)/,
          priority: 10,
        },
      },
    });
    config.plugin('AntdDayjsWebpackPlugin').use(new AntdDayjsWebpackPlugin());
  },
});
