/*
 * @Author: 李聪
 * @Date: 2021-08-31 10:57:39
 * @LastEditors: 李聪
 * @LastEditTime: 2021-09-01 15:40:15
 * @Description:
 */
import { createApp } from 'vue';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';

import router from './router/index';
import store from './store/index';
import App from './App.vue';
import 'styles/global.less';

createApp(App).use(router).use(store).use(ElementPlus).mount('#app');
