import authRoutes from './authRoutes'
export default [
  { path: '/login', component: '@/pages/user/login' },
  { path: '/error', component: '@/pages/errors' },
  {
    path: '/',
    component: '@/layouts/index',
    routes: authRoutes
  },
];
