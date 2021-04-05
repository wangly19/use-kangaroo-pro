export default {
  // 支持值为 Object 和 Array
  'GET /api/users': {
    code: '200',
    
  },

  // GET 可忽略
  '/api/users/1': { id: 1 },

  // 支持自定义函数，API 参考 express@4
  'POST /api/users/create': (req, res) => {
    // 添加跨域请求头
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.end('ok');
  },
  'POST /api/service-admin/v1/user/info': {
    code: '200',
    message: '',
    data: {
      name: 'wangly19',
      title: '高级前端工程师',
      avatar: 'https://sf6-ttcdn-tos.pstatp.com/img/user-avatar/b963d484d05cba9ce3e0aa029561fa2b~300x300.image',
      uid: 'UID4248168660735310',
      useMenuAuth: ['角色1', '角色2'],
      usePageAuth: [12, 20, 13, 22, 31, 29, 17]
    },
  },
}