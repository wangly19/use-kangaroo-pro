import mockjs from 'mockjs';

export default {
  'POST /api/service-admin/v1/user/info': {
    code: 2000,
    message: '操作成功',
    data: {
      name: 'wangly19',
      title: '高级前端工程师',
      avatar: 'https://sf6-ttcdn-tos.pstatp.com/img/user-avatar/b963d484d05cba9ce3e0aa029561fa2b~300x300.image',
      uid: 'UID4248168660735310',
      useMenuAuth: ['角色1'],
      usePageAuth: [12, 20, 13, 22, 31, 29, 17]
    },
  },
  'POST /api/service-admin/v1/user/login': mockjs.mock({
    code: 2000,
    message: '操作成功',
    showMessage: false,
    data: {
      token: '@string'
    }
  },)
}