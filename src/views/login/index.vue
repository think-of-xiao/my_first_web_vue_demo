<template>
  <div class='login_container'>
    <el-row>
      <el-col :span='12' :xs='0'></el-col>
      <el-col :span='12' :xs='24'>
        <el-form
          ref='loginFormRef'
          :model='loginFormModel'
          :rules='rules'
          class='login_form'
          status-icon
        >
          <h1>Hello</h1>
          <h2>欢迎来到tox的管理平台</h2>
          <el-form-item prop='username'>
            <el-input
              placeholder='请输入登录账号'
              :prefix-icon='User'
              v-model='loginFormModel.username'
            ></el-input>
          </el-form-item>
          <el-form-item prop='password'>
            <el-input
              placeholder='请输入登录密码'
              type='password'
              :prefix-icon='Lock'
              v-model='loginFormModel.password'
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button
              class='login_btn'
              type='primary'
              size='default'
              :loading='isLoading'
              @click='submitForm(loginFormRef)'
            >
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
import type { FormInstance, FormRules } from 'element-plus'
import { ElNotification } from 'element-plus'

let isLoading = ref(false)
// 获取用户相关状态管理类
let userStore = useUserStore()
// 获取路由管理对象
let router = useRouter()

// 账号密码校验规则
const validatorUserName = (_: any, value: any, callback: any) => {
  if (value === '') {
    callback(new Error('用户名不能为空'))
  } else {
    callback()
  }
}
const validatorPassword = (_: any, value: any, callback: any) => {
  if (value === '') {
    callback(new Error('密码不能为空'))
  } else if (value.length < 6) {
    callback(new Error('密码长度不能小于6位'))
  } else {
    callback()
  }
}
let loginFormRef = ref<FormInstance>()
let loginFormModel = reactive({
  username: '',
  password: '',
})
const rules = reactive<FormRules<typeof loginFormModel>>({
  username: [{ validator: validatorUserName, trigger: 'blur' }],
  password: [{ validator: validatorPassword, trigger: 'blur' }],
})

// 提交表单
function submitForm(formEl: FormInstance | undefined) {
  if (!formEl) return
  formEl.validate(isValid => {
    if (isValid) {
      // 验证通过执行登录
      login()
      return true
    } else {
      ElNotification({
        type: 'error',
        message: '信息不完整，请确认！',
      })
      return false
    }
  })
}

async function login() {
  isLoading.value = true
  try {
    await userStore.login(loginFormModel)
    isLoading.value = false
    await router.push('/')
    // 提示登录成功信息
    ElNotification({
      type: 'success',
      message: '登录成功',
    })
  } catch (e) {
    isLoading.value = false
    ElNotification({
      type: 'error',
      message: (e as Error).message ?? 'sorry，登录出错',
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
