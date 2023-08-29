<!-- TOC -->
* [vue3 管理后台项目模版搭建通用版](#vue3-管理后台项目模版搭建通用版)
* [模版使用到的各类技术栈及插件如下：](#模版使用到的各类技术栈及插件如下)
* [模版所需基本环境配置如下：](#模版所需基本环境配置如下)
* [项目开发基本配置如下：](#项目开发基本配置如下)
<!-- TOC -->

# vue3 管理后台项目模版搭建通用版
* **取 tag_0.0.1_release tag版本即可**

# 模版使用到的各类技术栈及插件如下：
*  nodejs、vite、vue3、ts、pnpm、eslint、prettier、stylelint、husky、commitLint、element plus、svg全局组件、sass、mock、axios、vue-router@4、pinia等等...

# 模版所需基本环境配置如下：
1. WebStore
   [下载地址](https://www.jetbrains.com.cn/webstorm/promo/?bd_vid=10455245255917264192)
   [编译器破解方式](https://ziby0nwxdov.feishu.cn/docx/TwGLdirkOoxC2cx3Il6czwJSnac?from=from_copylink)
2. node.js
   [下载地址](https://nodejs.org/zh-cn)
3. vue3
   [官网地址](https://cn.vuejs.org/guide/reusability/composables.html#async-state-example)
4. vite
   [属于vue全家桶系列](https://cn.vitejs.dev/)
5. pnpm
   自行安装

# 项目开发基本配置如下：
1. eslint
   * eslint中文官网:http://eslint.cn/，提供一个插件化的javascript代码检测工具。
      安装：pnpm i eslint -D
      init：npx eslint --init
   执行完init命令后，生成配置文件      .eslint.cjs
   pnpm install -D eslint-plugin-import eslint-plugin-vue eslint-plugin-node eslint-plugin-prettier eslint-config-prettier eslint-plugin-node @babel/eslint-parser
     相关文件见[.eslintrc.cjs](.eslintrc.cjs)
     [.eslintignore](.eslintignore), [package.json新增运行脚本](package.json)
2. prettier
         eslint针对的是javascript，他是一个检测工具，包含js语法以及少部分格式问题，在eslint看来，语法对了就能保证代码正常运行，格式问题属于其次；而prettier属于格式化工具，它看不惯格式不统一，所以它就把eslint没干好的事接着干，另外，prettier支持包含js在内的多种语言。
      总结起来，eslint和prettier这俩兄弟一个保证js代码质量，一个保证代码美观。
      pnpm install -D eslint-plugin-prettier prettier eslint-config-prettier
      package.json新增运行脚本
      "format": "prettier --write \"./**/*.{html,vue,ts,js,json,md}\"",
   通过pnpm run lint去检测语法，如果出现不规范格式,通过pnpm run fix 修改。
   相关文件见[.prettierrc.json](.prettierrc.json)
   [.prettierignore](.prettierignore), [package.json新增运行脚本](package.json)
3. stylelint
      stylelint为css的lint工具。可格式化css代码，检查css语法错误与不合理的写法，指定css书写顺序等。官网:https://stylelint.bootcss.com/
      安装以下依赖：
      pnpm add sass sass-loader stylelint postcss postcss-scss postcss-html stylelint-config-prettier stylelint-config-recess-order stylelint-config-recommended-scss stylelint-config-standard stylelint-config-standard-vue stylelint-scss stylelint-order stylelint-config-standard-scss -D
      package.json新增运行脚本
      "lint:style": "stylelint src/**/*.{css,scss,vue} --cache --fix",
   相关文件见[.stylelintrc.cjs](.stylelintrc.cjs)
   [.stylelintignore](.stylelintignore), [package.json新增运行脚本](package.json)
4. husky
   利用husky在代码提交之前触发git hook(git在客户端的钩子)，然后执行pnpm run format来自动的格式化我们的代码。
   安装husky：pnpm install -D husky
   init：npx husky-init
   执行完npx husky-init会在根目录下生成个一个.husky目录，在这个目录下面会有一个pre-commit文件，这个文件里面的命令在我们执行commit的时候就会执行。
   配置husky：npx husky add .husky/commit-msg
   相关文件见[.husky文件夹](.husky)
5. commitLint
      对于我们的commit信息，也是有统一规范的，不能随便写,要让每个人都按照统一的标准来执行，我们可以利用commitlint来实现。
   安装：pnpm add @commitlint/config-conventional @commitlint/cli -D
   提交所需前缀说明如下：
   'feat',//新特性、新功能
   'fix',//修改bug
   'docs',//文档修改
   'style',//代码格式修改, 注意不是 css 修改
   'refactor',//代码重构
   'perf',//优化相关，比如提升性能、体验
   'test',//测试用例修改
   'chore',//其他修改, 比如改变构建流程、或者增加依赖库、工具等
   'revert',//回滚到上一个版本
   'build',//编译相关的修改，例如发布版本、对项目构建或者依赖的改动
   在package.json中配置scripts命令 ："commitlint": "commitlint --config commitlint.config.cjs -e -V",
   配置命令：见[根目录下package.json -> scripts键值对](package.json)
   相关文件见[根目录下commitLint.config.cjs](commitlint.config.cjs)
   当我们 commit 提交信息时，就不能再随意写了，必须是 git commit -m 'fix: xxx' 符合类型的才可以，需要注意的是类型的后面需要用英文的 :，并且冒号后面是需要空一格的，这个是不能省略的 。
6. 强制使用pnpm包管理器工具
   在根目录创建scripts/preinstall.js文件，见[根目录下scripts文件夹](./scripts/preinstall.js)
   ``if (!/pnpm/.test(process.env.npm_execpath || '')) {
   console.warn(
   `\u001b[33mThis repository must using pnpm as the package manager ` +
   ` for scripts to work properly.\u001b[39m\n`,
   )
   process.exit(1)
   }``
   配置命令：见[根目录下package.json -> scripts键值对](package.json)
7. src别名配置
8. 环境变量配置（开发、生产和测试环境）
9. svg图标配置
   1. svg插件安装配置
      安装插件：pnpm install vite-plugin-svg-icons -D
      在[vite.config.ts中配置插件](vite.config.ts)，在[在入口文件main.ts中配置](./src/main.ts)
   2. svg封装为全局组件
      因为项目很多模块需要使用图标,因此把它封装为全局组件！！！一般全局组件我们都是放在src\components目录下，我们可能有多个全局组件，比如矢量图，分页器，三级分类等...我们需要用不同目录区分开来，我们在需要的组件全部注册在index.ts文件中，然后在入口文件main.ts中注册就行【这样就避免在入口文件main.ts每个组件都注册一次】。
      
      