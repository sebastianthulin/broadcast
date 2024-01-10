import { defineConfig } from 'vite'
export default defineConfig({
  build: {
    lib: {
      entry: 'source/js/app.js',
      formats: ['es']
    },
    rollupOptions: {
      external: /^lit/
    }
  }
})
