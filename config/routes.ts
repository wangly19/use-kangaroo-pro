import authRoutes from './authRoutes'
export default [
  { path: '/login', component: '@/pages/user/Login' },
  { path: '/error', component: '@/pages/Error' },
  {
    path: '/',
    component: '@/layouts/index',
    routes: authRoutes
  },
];
