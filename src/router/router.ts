// 对外暴露配置路由
export const constantRoute = [
  {
    // 登录路由
    path: '/login',
    component: () => import('@v/login/index.vue'),
    name: 'Login',
    meta: {
      title: '', // 菜单标题
      hidden: true, // 是否需要隐藏
      icon: '', // 图标
    },
  },
  {
    // 登录成功后的主页面路由
    path: '/',
    component: () => import('@v/index.vue'),
    name: 'Layout',
    redirect: '/home',
    meta: {
      title: '主菜单', // 菜单标题
      hidden: true, // 是否需要隐藏
      icon: 'Lock', // 图标
    },
    children: [
      {
        // home路由
        path: '/home',
        component: () => import('@v/home/index.vue'),
        name: 'Home',
        meta: {
          title: '首页', // 菜单标题
          hidden: true, // 是否需要隐藏
          icon: 'Lock', // 图标
        },
      },
      {
        // 子路由
        path: '/systemSet',
        component: () => import('@v/404/index.vue'),
        name: 'SystemSet',
        meta: {
          title: '系统设置',
          hidden: false,
          icon: 'Lock',
        },
      },
      {
        // 子路由
        path: '/passwordSet',
        component: () => import('@v/home/index.vue'),
        name: 'PasswordSet',
        meta: {
          title: '密码设置',
          hidden: false,
          icon: 'Lock',
        },
      },
      {
        // 子路由
        path: '/userManagement',
        // 此路由下存在子路由，此路由内容为空，但也需要添加<router-view></router-view>供子路由跳转，否则跳转不了子路由
        component: () => import('@v/user-management/index.vue'),
        name: 'UserManagement',
        meta: {
          title: '用户管理',
          hidden: false,
          icon: 'User',
        },
        children: [
          {
            // 路由
            path: '/userManagement/userInfo',
            component: () => import('@v/home/index.vue'),
            name: 'UserInfo',
            meta: {
              title: '个人信息',
              hidden: false,
              icon: 'User',
            },
          },
          {
            // 路由
            path: '/userManagement/userPermission',
            component: () => import('@v/404/index.vue'),
            name: 'UserPermission',
            meta: {
              title: '用户权限',
              hidden: false,
              icon: 'User',
            },
          },
        ],
      },
      {
        // mine路由
        path: '/mine',
        component: () => import('@v/home/index.vue'),
        name: 'Mine',
        meta: {
          title: '我的',
          hidden: false,
          icon: 'User',
        },
      },
    ],
  },
  {
    // 404路由
    path: '/404',
    component: () => import('@v/404/index.vue'),
    name: '404',
    meta: {
      title: '', // 菜单标题
      hidden: true, // 是否需要隐藏
      icon: '', // 图标
    },
  },
  {
    // 任意路由，上面都没有匹配，重定向到404页面
    path: '/:pathMatch(.*)*',
    redirect: '/404',
    name: 'Any',
    meta: {
      title: '', // 菜单标题
      hidden: true, // 是否需要隐藏
      icon: '', // 图标
    },
  },
]
