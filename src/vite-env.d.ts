/// <reference types="vite/client" />

declare module 'element-plus/dist/locale/zh-cn.mjs';

declare module "*.vue" {
  import { DefineComponent } from "vue"
  const component: DefineComponent<{}, {}, any>
  export default component
}