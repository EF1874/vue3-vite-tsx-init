<!--
 * @Author: 李聪
 * @Date: 2021-08-31 11:28:07
 * @LastEditors: 李聪
 * @LastEditTime: 2021-09-01 13:36:44
 * @Description:页面
-->
<script setup lang="ts">
import Test from '@/components/Test';

const {
  VITE_MODE_NAME,
  VITE_APP_ID,
  VITE_AGENT_ID,
  VITE_LOGIN_TEST,
  VITE_RES_URL,
  VITE_APP_TITLE
} = import.meta.env;

console.log(
  'modeName:',
  VITE_MODE_NAME,
  'appID:',
  VITE_APP_ID,
  'agemId:',
  VITE_AGENT_ID,
  'loginTest:',
  VITE_LOGIN_TEST,
  'resUrl:',
  VITE_RES_URL,
  'title:',
  VITE_APP_TITLE
);
</script>

<template>
  <div class="about">
    <Test></Test>
  </div>
</template>

<style lang="less" scoped>
.about {
  background: rgb(194, 154, 154);
}
</style>
