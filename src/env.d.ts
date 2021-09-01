/*
 * @Author: 李聪
 * @Date: 2021-08-31 10:57:39
 * @LastEditors: 李聪
 * @LastEditTime: 2021-09-01 10:07:05
 * @Description:
 */
/// <reference types="vite/client" />

declare module '*.vue' {
  import { DefineComponent } from 'vue';
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>;
  export default component;
}

interface ImportMetaEnv {
  VITE_MODE_NAME: string;
  VITE_APP_ID: string;
  VITE_AGENT_ID: string;
  VITE_LOGIN_TEST: string;
  VITE_RES_URL: string;
  VITE_APP_TITLE: string;
}
