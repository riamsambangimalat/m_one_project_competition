import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  base: './',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        profil: resolve(__dirname, 'profil.html'),
        kegiatan: resolve(__dirname, 'kegiatan.html'),
        fasilitas: resolve(__dirname, 'fasilitas.html'),
        prestasi: resolve(__dirname, 'prestasi.html'),
        kontak: resolve(__dirname, 'kontak.html'),
      },
    },
  },
})
