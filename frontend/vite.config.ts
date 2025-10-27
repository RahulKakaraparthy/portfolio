import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/portfolio/',
  server: {
    host: true,
    strictPort: true,
    port: 5173,
    watch: {
      usePolling: true
    }
  },
  build: {
    target: 'esnext',
    minify: 'terser',
    cssMinify: true,
    chunkSizeWarningLimit: 1600,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
          pdf: ['@react-pdf/renderer']
        }
      }
    },
    sourcemap: false
  }
})