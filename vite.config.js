import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import VueDevTools from 'vite-plugin-vue-devtools'
// import '@/assets/scss/style.scss'

// https://vitejs.dev/config/
export default defineConfig({
  lintOnSave:false,
  plugins: [vue(), VueDevTools()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/assets/scss/style.scss";`
      }
    }
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
