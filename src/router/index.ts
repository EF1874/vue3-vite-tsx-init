/*
 * @Author: 李聪
 * @Date: 2021-08-31 11:24:45
 * @LastEditors: 李聪
 * @LastEditTime: 2021-08-31 17:09:49
 * @Description: 路由配置
 */

import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import Home from '@/views/Home.vue';
import About from '@/views/About.vue';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
