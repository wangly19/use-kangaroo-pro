import { defineConfig } from 'umi'
import routes from './routes'

export default defineConfig({
  plugins: ['plugin-transform-api'],
  nodeModulesTransform: {
    type: 'none'
  },
  routes,
  fastRefresh: {},
  hash: true,
  antd: {},
  dva: {
  },
  alias: {
    '@/types': '../typings.d.ts'
  },
  interface: {
    path: 'services',
    requestPath: '@/utils/request'
  },
})
