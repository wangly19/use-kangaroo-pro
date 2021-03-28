export default [
  { path: '/login', component: '@/pages/DeskTop' },
  {
    path: '/',
    component: '@/layouts/index',
    routes: [
      { path: '/desktop', component: '@/pages/DeskTop' },
    ],
  }, 
]