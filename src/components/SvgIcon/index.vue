<template>
  <div id="container"></div>
  <!-- svg图标外层容器 -->
  <svg :style="{ width, height }">
    <use :xlink:href="prefix + name" :fill="color"></use>
  </svg>
</template>

<script setup lang="ts">
defineProps({
  // 属性前缀
  prefix: {
    type: String,
    default: '#icon-',
  },
  // 图标名称
  name: String,
  // 接收父组件传递颜色
  color: {
    type: String,
    default: '',
  },
  // 接收父组件传递过来的图标宽度
  width: {
    type: String,
    default: '16px',
  },
  // 接收父组件传递过来的图标高度
  height: {
    type: String,
    default: '16px',
  },
})
</script>
<style scoped></style>