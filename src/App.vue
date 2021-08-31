<!--
 * @Author: 李聪
 * @Date: 2021-08-31 10:57:39
 * @LastEditors: 李聪
 * @LastEditTime: 2021-08-31 14:07:28
 * @Description:
-->
<script setup lang="ts"></script>

<template>
  <div id="app">
    <router-link to="/" class="nav">首页</router-link>
    <router-link :to="{ path: '/vuex' }" class="nav">Vuex</router-link>
    <router-link :to="{ name: 'Axios' }" class="nav">Axios</router-link>
    <router-view></router-view>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.nav {
  margin-right: 10px;
}
</style>
