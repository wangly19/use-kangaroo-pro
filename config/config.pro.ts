import { defineConfig } from 'umi'

export default defineConfig({
  externals: {
    react: 'window.React'
  },
  scripts: ['https://unpkg.com/react@17.0.1/umd/react.production.min.js']
})
