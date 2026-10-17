# Interactive Portfolio Website

Website portofolio pribadi multi-halaman yang interaktif dan responsif, dibangun dengan **React + Vite** dan **React Router**. Proyek ini dibuat untuk **Task 2 (Easy) – Interactive Portfolio Website**.

> Menampilkan profil, keahlian, pengalaman, sertifikat, dan katalog proyek dalam satu SPA yang ringan dengan optimasi SEO per halaman.

---

## Ringkasan Proyek

| Item | Keterangan |
| --- | --- |
| **Program** | Internship Project — Auspify Technologies |
| **Peserta** | Muhammad Azka Sa'adi Nabhan |
| **Posisi** | Frontend Development Intern |
| **Kategori** | Task 2 (Easy) — Interactive Portfolio Website |
| **Demo** | https://porto.azkadev.my.id |
| **Repositori** | https://github.com/KAA070209/porto-azkadev.my.id |

---

## Fitur

| Fitur | Deskripsi |
| --- | --- |
| **SPA Routing** | Navigasi antar halaman tanpa reload penuh menggunakan React Router DOM. |
| **Home / Hero** | Bagian sambutan dengan Badge ketersediaan, foto profil, badge pengalaman, dan kartu statistik layanan (Web, API, Mobile). |
| **Tech Stack** | Menampilkan teknologi yang dikuasai. |
| **Featured Projects** | Menampilkan 4 proyek unggulan yang bisa diklik menuju halaman detail. |
| **Expertise & Services** | Penjelasan bidang keahlian dan layanan yang ditawarkan. |
| **Experience** | Riwayat pengalaman kerja/kerja praktik. |
| **Certificate** | Galeri sertifikat dan pelatihan. |
| **How I Work** | Alur kerja dalam mengerjakan sebuah proyek. |
| **Halaman Projects** | Katalog seluruh proyek (6 proyek) lengkap dengan kategori dan tag teknologi. |
| **Detail Proyek** | Halaman per-proyek: overview, galeri (lightbox), *The Challenge*, *The Solution* + *Core Features*, *Results & Impact*, tech stack, dan cuplikan kode. |
| **Halaman Skills** | Daftar keahlian per kategori (Frontend, Backend, Database, DevOps & Tools) dengan indikator level. |
| **Halaman Contact** | Form kontak yang mengirim pesan langsung via WhatsApp, plus kanal Email, GitHub, LinkedIn, dan Instagram. |
| **CV Preview** | Pratinjau CV (PDF) di dalam modal menggunakan `pdfjs-dist`. |
| **Animasi Scroll** | Efek kemunculan elemen saat di-scroll via `IntersectionObserver` (`animate-on-scroll`). |
| **Navbar Responsif** | Menu hamburger untuk mobile dan penyorotan menu aktif sesuai bagian yang sedang dilihat. |
| **SEO per Halaman** | Manajer SEO ringan (title, description, canonical, Open Graph, Twitter Card, JSON-LD) yang diperbarui setiap perubahan rute. |
| **Responsive Design** | Tampilan menyesuaikan desktop, tablet, dan HP. |

---

## Teknologi

| Teknologi | Kegunaan |
| --- | --- |
| **React 19** | Membangun UI berbasis komponen |
| **Vite 8** | Development server & bundler |
| **React Router DOM 7** | Routing SPA multi-halaman |
| **pdfjs-dist** | Pratinjau dokumen CV (PDF) di modal |
| **JavaScript (ESM)** | Logika aplikasi |
| **CSS (per-komponen)** | Styling & responsive design |
| **Oxlint** | Linter kode |
| **Vercel** | Deployment aplikasi |

---

## Struktur Rute

| Rute | Halaman | Komponen |
| --- | --- | --- |
| `/` | Home | Hero, TechStack, Projects, Expertise, Services, Experience, Certificate, HowIWork |
| `/about` | About | `pages/AboutPage.jsx` |
| `/skills` | Skills | `pages/SkillsPage.jsx` |
| `/projects` | Semua Proyek | `pages/ProjectsPage.jsx` |
| `/projects/:id` | Detail Proyek | `pages/ProjectDetailPage.jsx` |
| `/contact` | Kontak | `pages/ContactPage.jsx` |

---

## Menjalankan Proyek

Pastikan **Node.js 18+** sudah terpasang.

```bash
# 1. Install dependency
npm install

# 2. Jalankan development server (buka http://localhost:5173)
npm run dev

# 3. Build untuk produksi
npm run build

# 4. Pratinjau hasil build
npm run preview
```

### Skrip yang Tersedia

| Perintah | Deskripsi |
| --- | --- |
| `npm run dev` | Menjalankan Vite development server dengan HMR. |
| `npm run build` | Membangun bundel produksi ke folder `dist/`. |
| `npm run preview` | Menjalankan pratinjau hasil build produksi. |
| `npm run lint` | Menjalankan Oxlint pada kode sumber. |

---

## Struktur Folder

```text
task 2/
├── public/                          # aset statis (foto profil, gambar proyek, CV, sertifikat, dsb.)
├── src/
│   ├── components/
│   │   ├── About/                   # bagian About
│   │   ├── Certificate/             # galeri sertifikat
│   │   ├── Contact/                 # form & kanal kontak
│   │   ├── Experience/              # pengalaman
│   │   ├── Expertise/               # keahlian
│   │   ├── Footer/                  # footer
│   │   ├── Hero/                    # bagian hero
│   │   ├── HowIWork/                # alur kerja
│   │   ├── Navbar/                   # navbar + CVPreviewModal
│   │   ├── Projects/                # proyek unggulan
│   │   ├── Services/                # layanan
│   │   ├── TechStack/               # teknologi
│   │   └── Typewriter/              # efek ketik
│   ├── data/
│   │   └── projectsData.js          # sumber data 6 proyek
│   ├── pages/
│   │   ├── HomePage.jsx
│   │   ├── AboutPage.jsx
│   │   ├── SkillsPage.jsx
│   │   ├── ProjectsPage.jsx
│   │   ├── ProjectDetailPage.jsx
│   │   └── ContactPage.jsx
│   ├── App.jsx                      # konfigurasi routing + observer animasi
│   ├── main.jsx                     # entry point React
│   ├── seo.js                       # manajer meta tag & JSON-LD per rute
│   ├── App.css                      # style global aplikasi
│   └── index.css                    # style dasar
├── index.html                       # meta dasar + JSON-LD awal
├── vercel.json                      # konfigurasi rewrite SPA untuk Vercel
├── vite.config.js
└── package.json
```

---

## SEO & Metadata

Aplikasi memakai `src/seo.js`, sebuah manajer SEO ringan yang memperbarui `<head>` pada setiap perubahan rute:

- `<title>`, meta `description`, dan `<link rel="canonical">`
- Open Graph (`og:title`, `og:description`, `og:url`, `og:image`, `og:type`)
- Twitter Card (`twitter:title`, `twitter:description`, `twitter:image`)
- **JSON-LD** terstruktur: `Person`, `WebSite`, `ProfilePage` di `index.html`, serta `CreativeWork` pada halaman detail proyek.

---

## Deployment

Aplikasi di-deploy ke **Vercel**. File `vercel.json` berisi rewrite agar seluruh rute diarahkan ke `index.html` (mendukung client-side routing):

```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" },
    { "source": "/google031f56380b879fb6.html", "destination": "/google031f56380b879fb6.html" }
  ]
}
```

---

## Catatan

- Data proyek bersifat statis dan didefinisikan pada `src/data/projectsData.js`.
- Halaman Contact mengirim pesan melalui tautan `wa.me` (WhatsApp), bukan backend server.
- Sejumlah proyek menautkan `demoUrl` ke `/contact` karena belum ada URL demo publik.
