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
  interface: {
    path: 'services',
    requestPath: '@/utils/request'
  }
})
