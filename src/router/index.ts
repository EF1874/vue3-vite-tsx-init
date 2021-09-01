/*
 * @Author: 李聪
 * @Date: 2021-08-31 11:24:45
 * @LastEditors: 李聪
 * @LastEditTime: 2021-09-01 11:39:56
 * @Description: 路由配置
 */

import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import Home from '@/view/Home.vue';
import About from '@/view/About.vue';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/view/About.vue')
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
