<template>
  <div class='logo' v-if='logoHidden'>
    <SvgIcon :width='logoWidth' :height='logoHeight' :name='logoName'></SvgIcon>
    <p>{{ title }}</p>
  </div>
</template>

<script lang='ts'>
export default {
  name: 'Logo',
}
</script>

<script lang='ts' setup>
import SvgIcon from '@c/SvgIcon/index.vue'

defineProps({
  title: {
    type: String,
    default: () => 'tox的管理平台',
  },
  logoName: {
    type: String,
    default: 'logo',
  },
  logoWidth: {
    type: String,
    default: '40px',
  },
  logoHeight: {
    type: String,
    default: '40px',
  },
  logoHidden: {
    type: Boolean,
    default: true,
  },
})
</script>

<style lang='scss' scoped>
.logo {
  width: 100%;
  height: $base_menu-logo-height;
  color: white;
  display: flex;
  align-items: center;
  padding: 10px;

  p {
    font-size: $base_logo-title-fontSize;
    margin-left: 10px;
    color: #213547;
  }
}
</style>
