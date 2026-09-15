# 🚀 TAGANA - IoT Monitoring Landing Page

Selamat datang di repositori resmi untuk **Landing Page TAGANA**, sebuah platform monitoring IoT (Internet of Things) modern yang dirancang untuk memberikan pemantauan real-time, notifikasi cerdas, dan keamanan data tingkat tinggi.

Landing page ini dibangun dengan fokus pada performa, estetika (*UI/UX B2B Grade*), dan interaktivitas yang mulus.

---

## 🛠️ Tech Stack & Teknologi Terkini

Proyek ini dibangun menggunakan ekosistem frontend paling modern:

- **[React](https://react.dev/) (v19)** - Library utama untuk membangun antarmuka pengguna.
- **[Vite](https://vitejs.dev/)** - *Build tool* dan *Dev Server* super cepat.
- **[Tailwind CSS (v4)](https://tailwindcss.com/)** - *Utility-first CSS framework* untuk styling yang instan dan konsisten.
- **[Framer Motion](https://www.framer.com/motion/)** - Library animasi tingkat lanjut untuk efek transisi (*scroll-reveal*, *stagger*, *floating elements*).
- **[Lenis](https://lenis.studiofreight.com/)** - *Smooth scrolling library* untuk memberikan sensasi *scroll* ber-momentum layaknya website premium.
- **[React Router DOM](https://reactrouter.com/)** - *Routing* modern tanpa memuat ulang (reload) halaman, dengan dukungan *anchor link* untuk *single-page navigation*.
- **[Lucide React](https://lucide.dev/)** - Koleksi ikon SVG yang estetik, ringan, dan konsisten.

---

## ✨ Fitur Utama (Features)

1. **Desain Super Responsif (Mobile-First):** Tampilan otomatis menyesuaikan secara sempurna dari layar *smartphone* kecil hingga *desktop* lebar (4K).
2. **Scroll Halus & Menawan (Lenis Smooth Scroll):** Menggantikan gulir *default* browser dengan momentum scroll yang mulus bak sutra.
3. **Micro-Interactions & Animasi:** 
   - Elemen muncul secara perlahan (*fade-in up*) saat di-scroll menggunakan Framer Motion.
   - Mockup aplikasi (*Live CSS App Mockup*) dengan grafik bergerak, notifikasi memantul (*spring effect*), dan indikator *online* yang berdenyut.
   - Logo mitra (Tech Stack) dengan efek *grayscale to color* pada saat *hover*.
4. **Routing Dinamis & Scrollspy:**
   - Navigasi mulus antara halaman `Home`, `Kebijakan Privasi`, dan `Data Safety`.
   - Navbar otomatis mendeteksi URL aktif dan mengubah warna teks (*Active State*).
   - Sidebar navigasi lengket (*sticky*) dengan fitur *Scrollspy* di halaman Kebijakan Privasi & Data Safety.
5. **Corporate SaaS Aesthetics:** Desain yang merepresentasikan keamanan dan kepercayaan (Skema warna biru korporat, *glassmorphism*, dan *radial gradient glow*).

---

## 📁 Struktur Direktori (Project Structure)

```text
tagana-landing/
├── public/                 # Aset statis yang tidak diproses oleh Vite
├── src/
│   ├── assets/             # Aset gambar, ikon, dan logo
│   ├── components/         # Komponen yang dapat digunakan ulang (Reusable)
│   │   ├── Navbar.jsx      # Header navigasi & Mobile Menu
│   │   └── Footer.jsx      # Footer & Tautan Sosial
│   ├── pages/              # Komponen halaman penuh
│   │   ├── Home.jsx        # Halaman Utama (Hero, Fitur, Cara Kerja, Stats)
│   │   ├── PrivacyPolicy.jsx # Kebijakan Privasi dengan Scrollspy
│   │   └── DataSafety.jsx  # Keamanan Data (Trust Center B2B)
│   ├── App.jsx             # Router utama & Konfigurasi Lenis Smooth Scroll
│   ├── main.jsx            # Entry point React
│   └── index.css           # Global CSS & Tailwind v4 Theme Variables
├── index.html              # HTML utama
├── package.json            # Dependensi proyek
├── vite.config.js          # Konfigurasi Vite & Plugin Tailwind
└── README.md               # Dokumentasi proyek (Anda di sini)
```

---

## 🚀 Cara Instalasi & Menjalankan (Getting Started)

Pastikan komputer Anda sudah terinstal **Node.js** (v18 ke atas sangat disarankan).

1. **Clone repositori ini:**
   ```bash
   git clone https://github.com/tagana-pm-bem/tagana-landing-page.git
   cd tagana-landing-page
   ```

2. **Instal dependensi (libraries):**
   ```bash
   npm install
   ```

3. **Jalankan server pengembangan (Development Server):**
   ```bash
   npm run dev
   ```
   *Buka URL (biasanya `http://localhost:5173`) di browser Anda.*

4. **Build untuk Produksi (Production):**
   ```bash
   npm run build
   ```
   *Hasil build akan berada di dalam folder `dist/` dan siap di-deploy ke hosting (Vercel, Netlify, dll).*

---

## 🎨 Konfigurasi Tema (Customization)

### 1. Mengubah Warna Utama (Brand Colors)
Buka file `src/index.css`. Proyek ini menggunakan standar Tailwind CSS v4 di mana *design tokens* didefinisikan langsung di dalam CSS via direktif `@theme`:
```css
@theme {
  --color-primary: #2563EB;       /* Warna Utama (Blue-600) */
  --color-primary-hover: #1D4ED8; /* Hover Warna Utama (Blue-700) */
  --color-secondary: #0EA5E9;     /* Warna Sekunder (Sky-500) */
  /* ... */
}
```

### 2. Memodifikasi Navigasi
Buka `src/components/Navbar.jsx`. Cari array `navLinks` di bagian atas file:
```javascript
const navLinks = [
  { label: 'Beranda', href: '/', isAnchor: false },
  { label: 'Fitur', href: '/#features', isAnchor: true },
  /* ... */
]
```
Ubah `label` dan `href` sesuai kebutuhan. Gunakan `isAnchor: true` jika tautan tersebut mengarah ke bagian spesifik di halaman utama.

---

## 📝 Lisensi
Proyek TAGANA Landing Page adalah milik internal organisasi TAGANA PM BEM. Hak cipta dilindungi.
