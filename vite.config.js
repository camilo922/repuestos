import { defineConfig } from 'vite'

// Si el sitio se sirve desde un dominio propio (raíz), base es '/'.
// Si se sirve desde <usuario>.github.io/repuestos/, cambiar base a '/repuestos/'.
export default defineConfig({
  base: '/',
  build: {
    outDir: 'dist',
  },
})
