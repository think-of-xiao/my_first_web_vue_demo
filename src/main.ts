import { createApp } from 'vue'
// 引入element plus ui库
import ElementPlus from 'element-plus'
// 引入el-message、el-message-box样式文件，避免使用这两组件时框架样式失效的问题
import "element-plus/theme-chalk/el-message.css";
import "element-plus/theme-chalk/el-message-box.css";
//@ts-ignore忽略当前文件ts类型的检测否则有红色提示(打包会失败)
// 引入 element plus 国际化
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
// svg插件需要配置代码
import 'virtual:svg-icons-register'
// 引入自定义插件对象：注册整个项目全局组件
import GlobalComponent from '@c/index.ts'

import App from '@/App.vue'
// 引入模版的全局样式
import '@s/index.scss'

const app = createApp(App)
app.use(ElementPlus, { locale: zhCn })
app.use(GlobalComponent)
app.mount('#app')
