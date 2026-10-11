# Portfolio Rifki Fauzi

Portfolio pribadi yang **100% statis**. Tidak ada backend, tidak ada database,
tidak ada server-side rendering — semua konten di-hardcode di dalam repository
dan di-build menjadi file HTML/CSS/JS murni.

## Stack

- [Next.js 16](https://nextjs.org) (App Router, `output: "export"`)
- React 19
- TypeScript
- Tailwind CSS 3
- [@remixicon/react](https://remixicon.com) untuk ikon

## Menjalankan

```bash
npm install

npm run dev      # http://localhost:3000

npm run build    # static export ke folder ./out
npm run serve    # preview hasil build (http://localhost:3000)
npm run lint
```

## Struktur

```
app/            Routes & layout Next.js (satu halaman: /)
components/     Semua komponen UI (Navbar, Hero, Marquee, Services, Work, ...)
  ui/           Primitif reusable (Button, Container, Section)
data/portfolio.ts  <- SATU-SATUNYA sumber data konten (hardcoded)
public/         Aset statis (foto, screenshot proyek, CV, favicon)
scripts/        Utilitas (generate favicon)
out/            Hasil `next build` (static export, tidak di-commit)
```

## Mengubah konten

Seluruh isi situs — profil, kontak, tentang, skill, layanan, proyek — berada di
satu file: **`data/portfolio.ts`**. Tidak ada fetch, API route, atau form yang
menirim data ke server; form kontak memakai `mailto:` langsung.

Contoh:

```ts
export const contactData = {
  email: "rifkifauzi325@gmail.com",
  githubUrl: "https://github.com/Rifki-reys",
  // ...
};
```

Setelah mengubah data, `npm run build` akan menghasilkan ulang situs statis.

## Deploy

Folder `out/` bisa langsung di-hosting di mana saja:

- **Apache / XAMPP** — arahkan DocumentRoot ke folder `out/`
- **Nginx** — `root /path/to/out;`
- **GitHub Pages / Netlify / Vercel** — cukup publish folder `out/`

Tidak perlu PHP, MySQL, atau konfigurasi server tambahan.