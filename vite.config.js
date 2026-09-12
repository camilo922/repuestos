import { defineConfig } from 'vite'
import { fileURLToPath, URL } from 'node:url'

// Si el sitio se sirve desde un dominio propio (raíz), base es '/'.
// Si se sirve desde <usuario>.github.io/repuestos/, cambiar base a '/repuestos/'.
export default defineConfig({
  base: '/',
  build: {
    outDir: 'dist',
    // Multi-página: sin esto, Vite solo empaqueta index.html en el build
    // y terminos.html / privacidad.html quedarían fuera de dist/.
    rollupOptions: {
      input: {
        main: fileURLToPath(new URL('./index.html', import.meta.url)),
        terminos: fileURLToPath(new URL('./terminos.html', import.meta.url)),
        privacidad: fileURLToPath(new URL('./privacidad.html', import.meta.url)),
      },
    },
  },
})
