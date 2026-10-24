# SMP Muhammadiyah 1 Kudus — Website Profil Sekolah

Website profil resmi SMP Muhammadiyah 1 Kudus. Multi-page static site dengan HTML5, CSS3, dan JavaScript native (Vanilla).

## Halaman

- `index.html` — Home (Hero, Tiga Program, Cerita Brand, Sekilas Kami, CTA)
- `profil.html` — Profil (Cerita brand lengkap, Visi & Misi, Konsep 3 Program, Nilai, Kutipan)
- `kegiatan.html` — Kegiatan (8 kartu kegiatan dengan badge kategori)
- `fasilitas.html` — Fasilitas (8 kartu fasilitas)
- `prestasi.html` — Prestasi (6 prestasi dalam format timeline)
- `kontak.html` — Kontak (Info kontak, tombol WhatsApp, peta Google Maps)

## Struktur Folder

```
├── index.html
├── profil.html
├── kegiatan.html
├── fasilitas.html
├── prestasi.html
├── kontak.html
├── vite.config.js
├── assets/
│   ├── css/
│   │   ├── base.css       (reset, design tokens, tipografi)
│   │   ├── layout.css     (header, footer, section, grid)
│   │   └── components.css  (card, button, badge, breadcrumb, fallback)
│   ├── js/
│   │   └── main.js         (mobile nav, footer year, image fallback)
│   └── img/
│       ├── LogoSpemuku.png
│       └── fallback.svg
```

## Cara Edit Konten

Setiap section ditandai dengan komentar HTML `<!-- SECTION: ... -->`. Cari komentar tersebut untuk menemukan konten yang ingin diubah.

### Mengubah Nomor WhatsApp

Cari dan ganti `6281234567890` di semua file HTML dengan nomor WhatsApp resmi sekolah (format: 62xxx tanpa tanda + atau 0 di depan).

### Mengubah Alamat & Kontak

Lihat footer di setiap halaman dan section kontak di `kontak.html`.

## Teknologi

- HTML5, CSS3, JavaScript Native (tanpa framework)
- Vite sebagai build tool
- Google Fonts: Poppins (heading) + Inter (body)
- Foto dari Pexels (license-free)
