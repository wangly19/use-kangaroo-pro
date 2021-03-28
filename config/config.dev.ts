import { defineConfig } from 'umi'

export default defineConfig({
  cssModulesTypescriptLoader: {
    mode: 'emit'
  },
  define: {
    APP_SELECT_KEY: 'key'
  }
})
