import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
// 配置element plus 自动导入
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
// 引入svg需要用到的插件
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
// mock插件提供的方法
import { viteMockServe } from 'vite-plugin-mock'

// https://vitejs.dev/config/
export default defineConfig(({ command, mode}) => {
  let env = loadEnv(mode, process.cwd())
  return {
    resolve: {
      // src目录配置别名，方便引用 对应 tsconfig.json 中的映射
      alias: {
        '@': path.resolve('./src'),
        '@c': path.resolve('./src/components'),
        '@s': path.resolve('./src/styles'),
        '@u': path.resolve('./src/utils')
      }
    },
    // 我们通过css.preprocessorOptions.scss.additionalData来自动引入一个全局的Sass文件，
    // 可以在这个文件中定义一些全局的变量和混合器。
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "./src/styles/variables.scss";'
        }
      }
    },
    envDir: 'env',
    plugins: [
      vue(),
      createSvgIconsPlugin({
        iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
        symbolId: 'icon-[dir]-[name]'
      }),
      AutoImport({
        resolvers: [ElementPlusResolver()],
      }),
      Components({
        resolvers: [ElementPlusResolver()],
      }),
      viteMockServe({
        mockPath: 'mock',
        enable: command === 'serve', // 保证开发阶段可以使用mock接口
      })
    ],
    server: {
      host: '0.0.0.0',
      port: 5173,
      open: true, //是否自动打开浏览器
    }
  };
})
