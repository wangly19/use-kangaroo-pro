import type { AuthRoute } from "@/types";

const authRoutes: AuthRoute[] = [
  {
    path: '/',
    name: 'home',
    icon: 'icon-modular',
    auth: ['角色1'],
    component: '@/pages/DeskTop',
  },
  {
    path: '/desktop',
    name: 'desktop',
    icon: 'icon-layers',
    auth: ['角色1'],
    component: '@/pages/DeskTop',
  },
  {
    path: '/tables',
    name: 'tables',
    icon: 'icon-column-vertical',
    auth: ['角色1'],
    component: '@/pages/DeskTop',
  },
  {
    path: '/icons',
    name: 'icons',
    icon: 'icon-browse',
    auth: ['角色10'],
    component: '@/pages/DeskTop',
  },
  {
    path: '/components',
    name: 'components',
    icon: 'icon-layers',
    auth: ['角色4'],
    component: '@/pages/DeskTop',
  },
  {
    path: '/design',
    name: 'design',
    icon: 'icon-electronics',
    auth: ['角色2'],
    component: '@/pages/DeskTop',
  },
]

export default authRoutes