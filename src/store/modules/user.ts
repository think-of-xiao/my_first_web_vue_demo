// 用户相关仓库
import { defineStore } from 'pinia' // 引入创建状态共享的方法
import { reqLogin } from '@/api/user/index.ts' // 引入相关接口
import type { loginForm } from '@/api/user/type.ts' // 引入数据模型
// import { ref } from 'vue'
import { SET_TOKEN, GET_TOKEN } from '@u/token.ts'

export const useUserStore = defineStore(
  'user',
  () => {
    let token = GET_TOKEN()

    function isLogin() {
      return !(token == null || token === '')
    }

    async function login(data: loginForm) {
      let result = await reqLogin(data)
      if (result.code == 200) {
        // 登录成功需要保存token，以及跳转至home页
        token = result.data.token as string
        // 本地保存token
        SET_TOKEN(result.data.token as string)
        return 'ok'
      } else {
        return Promise.reject(new Error(result.data.message))
      }
    }

    return { token, login, isLogin }
  },
  /*, {
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
}*/
)

// 暴露当前用户信息相关的状态管理Store
export default useUserStore
