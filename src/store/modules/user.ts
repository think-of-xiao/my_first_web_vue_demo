// 用户相关仓库
import { defineStore } from 'pinia' // 引入创建状态共享的方法
import { reqLogin } from '@/api/user/index.ts' // 引入相关接口
import type { loginForm } from '@/api/user/type.ts' // 引入数据模型
import { ref } from 'vue'

export const useUserStore = defineStore(
  'user',
  () => {
    const token = ref(null)

    function isLogin() {
      return !(this.token == null || this.token === '')
    }

    async function login(data: loginForm) {
      let result = await reqLogin(data)
      if (result.code == 200) {
        this.token = result.data.token
      }
    }

    return { token, login, isLogin }
  } /*, {
  state: () => {
    return {
      token: null
    }
  },
  actions: {
    async login(data: loginForm) {
      let result = await reqLogin(data)
      if (result.code == 200) {
        this.token = result.data.token
      }
    }
  },
  getters: {
    isLogin() {
      return (!(this.token == null || this.token === ''))
    },
  },
}*/,
)

// 暴露当前用户信息相关的状态管理Store
export default useUserStore
