import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        liquidPaints: resolve(__dirname, 'liquid-paints.html'),
      },
    },
  },
})
