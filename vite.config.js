import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    devServer: {
      proxy: {
        '/api':{
          target: 'http://localhost:8000',
        }
      },
    },
  },
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./', import.meta.url))
    }
  },
  rollupOptions: {
    // Specify the entry point of your application
    input: 'src/main.js',

    // Other Rollup options you may need...
    // For example:
    // external: ['lodash'],
    // output: {
    //   dir: 'dist',
    //   format: 'es',
    //   sourcemap: true
    // }
  },
})
