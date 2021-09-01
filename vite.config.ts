/*
 * @Author: 李聪
 * @Date: 2021-08-31 10:57:39
 * @LastEditors: 李聪
 * @LastEditTime: 2021-08-31 17:59:51
 * @Description: vite配置
 */
import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
// 如果编辑器提示 path 模块找不到，则可以安装一下 @types/node -> npm i @types/node -D
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, __dirname);
  return {
    plugins: [vue()],
    // base: './', // 打包路径
    base: env.VITE_RES_URL,
    resolve: {
      alias: {
        // 路径别名
        '@': resolve(__dirname, 'src'),
        '@a': resolve(__dirname, 'src/assets'),
        '@c': resolve(__dirname, 'src/components'),
        '@u': resolve(__dirname, 'src/utils'),
        '@v': resolve(__dirname, 'src/view'),
        config: resolve(__dirname, 'src/config'),
        common: resolve(__dirname, 'src/common'),
        style: resolve(__dirname, 'src/style'),
        type: resolve(__dirname, 'src/type')
      }
    },
    root: './',
    server: {
      host: '0.0.0.0',
      port: 4000, // 服务启动端口
      open: false, // 服务启动时自动打开浏览器
      cors: true // 允许跨域

      // 设置代理，根据我们项目实际情况配置
      // proxy: {
      //   '/api': {
      //     target: 'http://xxx.xxx.xxx.xxx:8000',
      //     changeOrigin: true,
      //     secure: false,
      //     rewrite: (path) => path.replace('/api/', '/')
      //   }
      // }
    }
  };
});
