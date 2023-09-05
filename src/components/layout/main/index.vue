<template>
  <!-- 菜单栏路由组件出口的位置 -->
  <router-view v-slot='{ Component }'>
    <transition name='fade'>
      <!--
      渲染一级路由的子路由
      添加:key="$route.path" 强制在复用的视图之间进行过渡，避免相似
      -->
      <component :is='Component' :key='$route.path'></component>
    </transition>
  </router-view>
</template>

<script lang='ts'>
export default {
  // 给组件命名
  name: 'Main',
}
</script>

<script lang='ts' setup></script>

<style lang='scss' scoped>
.fade-enter-from {
  opacity: 0;
  transform: scale(0);
}

.fade-enter-active {
  transition: all .3s;
}

.fade-enter-to {
  opacity: 1;
  transform: scale(1);
}
</style>