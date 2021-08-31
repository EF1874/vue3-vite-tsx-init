/*
 * @Author: 李聪
 * @Date: 2021-08-31 11:24:45
 * @LastEditors: 李聪
 * @LastEditTime: 2021-08-31 11:35:31
 * @Description: 路由配置
 */

import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import Home from '@/views/Home.vue';
import Vuex from '@/views/Vuex.vue';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/vuex',
    name: 'Vuex',
    component: Vuex
  },
  {
    path: '/axios',
    name: 'Axios',
    component: () => import('@/views/Axios.vue')
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
