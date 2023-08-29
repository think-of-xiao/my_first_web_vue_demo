export default [
  {
    url: '/user/login', // 模拟登录的链接
    method: 'post', // 请求方式
    timeout: 3000, // 超时时间
    statusCode: 200, // 返回的http状态码
    response: ({ body }) => {
      // 获取请求体携带过了的用户名与密码
      const { username, password } = body
      // 调用获取用户信息函数，用于判断是否有此用户
      let checkUser = null
      if (username === 'admin' && password === '123456') {
        checkUser = {
          isCheckSuccess: true,
        }
      }
      // 没有此用户返回失败信息
      if (!checkUser || !checkUser.isCheckSuccess) {
        return { code: 201, message: '账号不存在', data: {} }
      }
      return {
        // 返回成功的结果集
        code: 200,
        message: '登录',
        data: {
          token: '123456789',
          content: '登录成功',
        },
      }
    },
  },
  {
    url: '/mock/getMenuList', // 模拟登录的链接
    method: 'get', // 请求方式
    timeout: 3000, // 超时时间
    statusCode: 200, // 返回的http状态码
    response: {
      // 返回的结果集
      code: 200,
      message: '获取菜单',
      data: {
        content: '获取菜单成功',
      },
    },
  },
]
