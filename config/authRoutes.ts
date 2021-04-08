import { AuthRoute } from "@/types";

const authRoutes: AuthRoute[] = [
  {
    path: '/',
    name: 'home',
    icon: 'icon-home',
    auth: ['角色1'],
    component: '@/pages/DeskTop',
  },
  {
    path: '/desktop',
    name: 'desktop',
    icon: 'icon-desktop',
    auth: ['角色1'],
    component: '@/pages/DeskTop',
  },
  {
    path: '/tables',
    name: 'tables',
    auth: ['角色1'],
    component: '@/pages/DeskTop',
  },
  {
    path: '/icons',
    name: 'icons',
    icon: 'icon-desktop',
    auth: ['角色10'],
    component: '@/pages/DeskTop',
  },
  {
    path: '/components',
    name: 'components',
    icon: 'icon-desktop',
    auth: ['角色4'],
    component: '@/pages/DeskTop',
  },
  {
    path: '/design',
    name: 'design',
    icon: 'icon-desktop',
    auth: ['角色2'],
    component: '@/pages/DeskTop',
  },
]

export default authRoutes