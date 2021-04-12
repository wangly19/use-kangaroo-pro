import { defineConfig } from 'umi'
import routes from './routes'

export default defineConfig({
  plugins: ['plugin-transform-api'],
  nodeModulesTransform: {
    type: 'none'
  },
  history: {
    type: 'hash'
  },
  manifest: {
    basePath: '/dist/',
    fileName: 'manifest.json',
    publicPath: '/',
},
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
