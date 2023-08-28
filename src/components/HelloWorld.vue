<script lang="ts" setup>
import { onMounted, ref, getCurrentInstance } from 'vue'
import request from '@u/request.ts'
import type { Action } from 'element-plus'
import { ElMessage, ElMessageBox } from 'element-plus'
import Pagination from '@c/Pagination/index.vue'

defineProps<{ msg: string }>()

//@ts-ignore
const { appContext } = getCurrentInstance()
const count = ref(0)

onMounted(() => {
  console.log('请求开始-app-vue-onMounted')
  request({
    url: '/mock/login',
    method: 'POST',
    data: {
      username: 'admin',
      password: 'admin123',
    },
  })
    .then(value => {
      console.log(
        `请求完成数据下发了-app-vue-onMounted value = ${value.message}`,
      )
    })
    .finally(() => console.log('请求结束了-app-vue-onMounted'))
})

//@ts-ignore
const open = () => {
  ElMessageBox.alert('This is a message', 'Title', {
    // if you want to disable its autofocus
    // autofocus: false,
    confirmButtonText: 'OK',
    callback: (action: Action) => {
      ElMessage({
        type: 'info',
        message: `action: ${action}`,
      })
    },
  })
}

const open2 = () => {
  ElMessageBox.alert(
    '这是一条信息',
    '我是标题',
    {
      confirmButtonText: '确认',
      callback: (action: Action) => {
        //@ts-ignore
        ElMessage({
          type: 'info',
          message: `action = ${action}`,
        })
      },
    },
    appContext,
  )
}
</script>

<template>
  <el-text>我是test = {{ msg }} {{ count }}</el-text>
  <el-main>
    <el-button @click="open2">点我弹出ElMessageBox</el-button>
  </el-main>
  <Pagination title="我是分页title" :flag="true" :type="0"></Pagination>
</template>

<style scoped></style>
