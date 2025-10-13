// File: vite.config.js
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path' // Impor modul 'path'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      // Pastikan alias '@' menunjuk ke folder 'src'
      '@': path.resolve(__dirname, './src'), 
    }
  }
})