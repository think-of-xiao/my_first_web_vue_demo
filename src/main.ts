import { createApp } from 'vue'
// 引入element plus ui库
import ElementPlus from 'element-plus'
// 引入element-plus各组件样式文件，避免使用组件时框架样式失效的问题
import 'element-plus/dist/index.css'
//@ts-ignore忽略当前文件ts类型的检测否则有红色提示(打包会失败)
// 引入 element plus 国际化
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
// svg插件需要配置代码
import 'virtual:svg-icons-register'
// 引入自定义插件对象：注册整个项目全局组件
import GlobalComponent from '@c/index.ts'
// 引入Pinia管理全局状态共享
import pinia from '@store/index.ts'
// 引入路由
import router from '@r/index.ts'

import App from '@/App.vue'
// 引入模版的全局样式
import '@style/index.scss'

const app = createApp(App)

app.use(ElementPlus, { locale: zhCn })
GlobalComponent.install(app)
app.use(pinia)
app.use(router)

app.mount('#app')
