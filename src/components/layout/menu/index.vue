<template>
  <template v-for='item in menuList' :key='item.path'>
    <!--  没有子路由  -->
    <template v-if='!item.children'>
      <el-menu-item
        :index='item.path'
        v-if='!item.meta.hidden'
        @click='goRoute'
      >
        <el-icon>
          <!--     component vue框架提供的全局组件，可以直接使用!     -->
          <component :is='item.meta.icon'></component>
        </el-icon>
        <template #title>
          <span>{{ item.meta.title }}</span>
        </template>
      </el-menu-item>
    </template>
    <!--  有路由但只有一个子路由  -->
    <template v-if='item.children && item.children.length == 1'>
      <el-menu-item
        :index='item.children[0].path'
        v-if='!item.children[0].meta.hidden'
        @click='goRoute'
      >
        <el-icon>
          <component :is='item.children[0].meta.icon'></component>
        </el-icon>
        <template #title>
          <span>{{ item.children[0].meta.title }}</span>
        </template>
      </el-menu-item>
    </template>
    <!--  有子路由且个数大于1  -->
    <el-sub-menu
      :index='item.path'
      v-if='item.children && item.children.length > 1'
    >
      <template #title>
        <el-icon>
          <component :is='item.meta.icon'></component>
        </el-icon>
        <span>{{ item.meta.title }}</span>
      </template>
      <!--   循环递归自己添加子路由菜单   -->
      <Menu :menuList='item.children'></Menu>
    </el-sub-menu>
  </template>
</template>

<script lang='ts'>
export default {
  name: 'Menu',
}
</script>

<script lang='ts' setup>
// 接收父组件传递过来的全部路由数组数据
import { useRouter } from 'vue-router'

defineProps(['menuList'])

// 获取路由器对象
let router = useRouter()

// 点击菜单的回调函数
const goRoute = (vc: any) => {
  console.log(`menu goRoute path = ${vc.index}`)
  // 路由跳转
  router.push(vc.index)
}
</script>

<style lang='scss' scoped></style>
