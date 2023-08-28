// 统一管理用户相关的接口
import request from '@u/request.ts'
import type { loginForm, loginRespData, userInfoData } from './type.ts'

// 统一接口管理
enum API {
  LOGIN_URL = 'user/login',
  USERINFO_URL = '/user/info',
}

// 登录接口，请求的数据data的数据类型可以写any，也可以明确类型，服务器返回的数据类型也需要定义
export const reqLogin = (data: loginForm) =>
  request.post<any, loginRespData>(API.LOGIN_URL, data)
// 获取用户信息接口
export const reqUserInfo = () =>
  request.get<any, userInfoData>(API.USERINFO_URL)
