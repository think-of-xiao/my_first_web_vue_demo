// 定义数据类型
// 定义登录接口请求的数据类型
export interface loginForm {
  username: string
  password: string
}

interface dataType {
  token: string
  message: string
}
// 定义登录接口返回的数据类型
export interface loginRespData {
  code: number
  data: dataType
}

interface userInfo1 {
  userId: number
  avatar: string
  username: string
  password: string
  desc: string
  roles: string[]
  buttons: string[]
  routes: string[]
  token: string
}
interface userInfo {
  checkUser: userInfo1
}
// 定义用户信息接口返回的数据类型
export interface userInfoData {
  code: number
  data: userInfo
}
