import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build:{
    rollupOptions: {
      // external: ['redux-logger'], // 将 redux-logger 作为外部模块
      // output: {
      //   // ...其他输出选项
      //   globals: {
      //     // 配置 redux-logger 全局变量
      //     'redux-logger': 'ReduxLogger'
      //   }
      // }
    }
  }
})
