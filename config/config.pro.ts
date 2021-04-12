import { defineConfig } from 'umi';
const AntdDayjsWebpackPlugin = require('antd-dayjs-webpack-plugin');

export default defineConfig({
  define: {
    APP_SELECT_KEY: 'key',
    ICON_FONT_URL: '//at.alicdn.com/t/font_2479004_mz3zxbz3pf.js',
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
  chainWebpack: function (config, { webpack }) {
    // dayjs替换moment，减小包体积
    config.plugin('AntdDayjsWebpackPlugin').use(new AntdDayjsWebpackPlugin());
  },
});
