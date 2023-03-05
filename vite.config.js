import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import eslint from 'vite-plugin-eslint'
import { fileURLToPath, URL } from "url";

// https://vitejs.dev/config/
export default defineConfig({
  test:{
    environment: 'happy-dom',
  },
  plugins: [
    vue(),
    eslint({
      fix: true,
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
})
