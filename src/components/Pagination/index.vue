<template>
  <el-text>{{ title }}, {{ flag }}, {{ type }}</el-text>
  <el-pagination :total="0"></el-pagination>
</template>

<script lang="ts" setup>
// defineProps({
//   title: String,
//   flag: Boolean,
//   type: Number
// })
defineProps<{ title?: string; flag?: boolean; type?: number }>()
</script>

<style lang="scss"></style>
