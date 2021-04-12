import type { AuthRoute } from "@/types";

const authRoutes: AuthRoute[] = [
  {
    path: '/',
    name: 'home',
    icon: 'icon-modular',
    auth: ['角色1'],
    component: '@/pages/deskTop',
  },
  {
    path: '/desktop',
    name: 'desktop',
    icon: 'icon-layers',
    auth: ['角色1'],
    component: '@/pages/deskTop',
  },
  {
    path: '/tables',
    name: 'tables',
    icon: 'icon-column-vertical',
    auth: ['角色1'],
    component: '@/pages/deskTop',
  },
  {
    path: '/icons',
    name: 'icons',
    icon: 'icon-browse',
    auth: ['角色10'],
    component: '@/pages/deskTop',
  },
  {
    path: '/components',
    name: 'components',
    icon: 'icon-layers',
    auth: ['角色4'],
    component: '@/pages/deskTop',
  },
  {
    path: '/design',
    name: 'design',
    icon: 'icon-electronics',
    auth: ['角色2'],
    component: '@/pages/deskTop',
  },
]

export default authRoutes