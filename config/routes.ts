import authRoutes from './authRoutes'
export default [
  { path: '/login', component: '@/pages/User/Login' },
  { path: '/error', component: '@/pages/Errors' },
  {
    path: '/',
    component: '@/layouts/index',
    routes: authRoutes
  },
];
