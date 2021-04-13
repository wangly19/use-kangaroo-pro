import { defineConfig } from 'umi'

export default defineConfig({
  cssModulesTypescriptLoader: {
    mode: 'emit'
  },
  define: {
    APP_SELECT_KEY: 'key1',
    ICON_FONT_URL: '//at.alicdn.com/t/font_2479004_mz3zxbz3pf.js',
  }
})
