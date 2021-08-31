<!--
 * @Author: 李聪
 * @Date: 2021-08-31 17:10:55
 * @LastEditors: 李聪
 * @LastEditTime: 2021-08-31 17:26:27
 * @Description:头部组件
-->

<script setup lang="ts">
defineProps({
  index: {
    type: Number,
    default: 0,
    required: false
  }
});
</script>

<template>
  <header class="system-header">{{ index }}</header>
</template>

<style lang="less" scoped>
.system-header {
  background: rgb(88, 163, 185);
}
</style>
