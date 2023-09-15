<template>
  <div class='layout_container'>
    <!--  左侧菜单  -->
    <div class='layout_slider'>
      <Logo logo-name='logo' :logo-hidden='logoHidden'></Logo>
      <!--   支持滑动   -->
      <el-scrollbar wrap-class='scrollbar-wrapper'>
        <!--   展示菜单   -->
        <el-menu
          background-color='$base-menu-background'
          text-color='#213547'
          :default-active='route.path'
        >
          <Menu :menuList='userStore.menuRoutes'></Menu>
        </el-menu>
      </el-scrollbar>
    </div>
    <!--  顶部导航  -->
    <div class='layout_tabbar'>顶部导航</div>
    <!--  内容展示区域  -->
    <div class='layout_main'>
      <Main></Main>
    </div>
  </div>
</template>

<script lang='ts' setup>
// 引入左侧菜单logo子组件
import Logo from '@c/layout/logo/index.vue'
// 引入左侧菜单组件
import Menu from '@c/layout/menu/index.vue'
// 引入内容展示Main组件
import Main from '@c/layout/main/index.vue'
import { ref } from 'vue'
import useUserStore from '@store/modules/user.ts'
import { useRoute } from 'vue-router'

let logoHidden = ref(true)
const userStore = useUserStore()
const route = useRoute()
</script>

<style lang='scss' scoped>
.layout_container {
  width: 100%;
  height: 100vh;

  .layout_slider {
    width: $base-menu-width;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background: $base-menu-background;
  }

  .layout_tabbar {
    position: fixed;
    width: calc(100% - $base-menu-width);
    height: $base-tabbar-height;
    background: darkcyan;
    top: 0;
    left: $base-menu-width;
  }

  .layout_main {
    position: absolute;
    width: calc(100% - $base-menu-width);
    height: calc(100% - $base-tabbar-height);
    left: $base-menu-width;
    top: $base-tabbar-height;
    padding: 16px;
    background: #213547;
    overflow: auto; //防止内容过多撑起整个页面，导致页面不好看
  }
}
</style>
