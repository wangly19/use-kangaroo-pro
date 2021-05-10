import { defineConfig } from 'umi'
import routes from './routes'

export default defineConfig({
  plugins: ['plugin-transform-api'],
  nodeModulesTransform: {
    type: 'none',
    exclude: [],
  },
  history: {
    type: 'hash'
  },
  base: '/',
  antd: {
  },
  routes,
  fastRefresh: {},
  alias: {
    '@/types': '../typings.d.ts'
  },
  interface: {
    path: 'services',
    requestPath: '@/utils/request'
  },
})
