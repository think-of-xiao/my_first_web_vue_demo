// 通过vue-router插件实现模版路由配置
import { createRouter, createWebHashHistory } from 'vue-router'
import { constantRoute } from '@r/router.ts'
import { useUserStore } from '@store/modules/user.ts'

// 创建路由器
const router = createRouter({
  history: createWebHashHistory(), // 模式配置，hash模式
  routes: constantRoute,
  // 滚动行为
  scrollBehavior() {
    return {
      left: 0,
      top: 0,
    }
  },
})

// 全局路由守卫
router.beforeEach((to, _, next) => {
  const store = useUserStore()
  console.log(
    `router.beforeEach routeName = ${String(
      to.name,
    )}, isLogin= ${store.isLogin()}, token = ${store.token}`,
  )
  if (to.name !== 'login' && !store.isLogin()) next({ name: 'login' })
  else if (to.name === 'login' && store.isLogin()) next({ path: '/' })
  else next()
})

export default router
