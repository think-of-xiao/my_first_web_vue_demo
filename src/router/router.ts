// 对外暴露配置路由
export const constantRoute = [
  {
    // 登录路由
    path: '/login',
    component: () => import('@v/login/index.vue'),
    name: 'login',
  },
  {
    // home数据路由
    path: '/',
    component: () => import('@v/home/index.vue'),
    name: 'home',
  },
  {
    // 404路由
    path: '/404',
    component: () => import('@v/404/index.vue'),
    name: '404',
  },
  {
    // 任意路由，上面都没有匹配，重定向到404页面
    path: '/:pathMatch(.*)*',
    redirect: '/404',
    name: 'Any',
  },
]
