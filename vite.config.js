import { defineConfig } from 'vite'

export default defineConfig({
  server: {
    port: 5174,
    strictPort: true,
  },
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        viajes: 'viajes.html',
        'viajes-uy-py': 'viajes/uruguay-paraguay.html',
        'viajes-brasil': 'viajes/brasil.html',
      }
    }
  }
})
