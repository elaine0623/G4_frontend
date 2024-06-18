import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import VueDevTools from 'vite-plugin-vue-devtools'
// import '@/assets/scss/style.scss'

// https://vitejs.dev/config/

export default defineConfig(({ command, mode, isSsrBuild, isPreview }) => {
  if (mode === 'prod') {
    // 放準備部署到server的設定
    return {
      base: '/cid101/g4/front/',
      build: {
        outDir: 'front'
      },
      css: {
        preprocessorOptions: {
          scss: {
            additionalData: `@import "@/assets/scss/style.scss";`
          }
        }
      },
      plugins: [
        vue(),
        VueDevTools(),
      ],
      resolve: {
        alias: {
          '@': fileURLToPath(new URL('./src', import.meta.url))
        }
      }
    }
  } else {
    // 放原本的設定
    return {
      lintOnSave: false,
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
    }
  }
})