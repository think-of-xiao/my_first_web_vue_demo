<template>
  <div class='login_container'>
    <el-row>
      <el-col :span='12' :xs='0'></el-col>
      <el-col :span='12' :xs='24'>
        <el-form class='login_form'>
          <h1>Hello</h1>
          <h2>欢迎来到tox的管理平台</h2>
          <el-form-item>
            <el-input
              placeholder='请输入登录账号'
              :prefix-icon='User'
              v-model='loginForm.username'
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-input
              placeholder='请输入登录密码'
              type='password'
              :prefix-icon='Lock'
              v-model='loginForm.password'
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button class='login_btn' type='primary' size='default' :loading='isLoading' @click='login()'>
              登录
            </el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script lang='ts' setup>
import { Lock, User } from '@element-plus/icons-vue'
// 收集表单数据-使用代理对象
import { reactive, ref } from 'vue'
import useUserStore from '@store/modules/user.ts'
import { useRouter } from 'vue-router'
import { ElNotification } from 'element-plus'

let isLoading = ref(false)
// 获取用户相关状态管理类
let userStore = useUserStore()
// 获取路由管理对象
let router = useRouter()

let loginForm = reactive({
  username: 'admin',
  password: '123456',
})

async function login() {
  isLoading.value = true
  try {
    await userStore.login(loginForm)
    isLoading.value = false
    await router.push('/')
    // 提示登录成功信息
    ElNotification({
      type: 'success',
      message: '登录成功'
    })
  } catch (e) {
    isLoading.value = false
    ElNotification({
      type: 'error',
      message: (e as Error).message ?? "sorry，登录出错"
    })
  }
}
</script>

<style lang='scss' scoped>
.login_container {
  width: 100vw;
  height: 100vh; //1vh 屏幕可见高度的1%
  background: url('@/assets/images/login_background.jpg') no-repeat;
  background-size: cover;

  .login_form {
    position: relative;
    width: 80%;
    top: 30vh;
    border-radius: 12px;
    background: url('@/assets/images/login_form.png') no-repeat;
    background-size: cover;
    padding: 40px;
    text-align: left;

    h1 {
      color: white;
      font-size: 40px;
    }

    h2 {
      color: white;
      font-size: 20px;
      margin: 20px 0;
    }

    .login_btn {
      width: 100%;
    }
  }
}
</style>
