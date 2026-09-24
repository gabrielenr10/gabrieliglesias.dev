# Portfolio

My personal portfolio website — built with [Astro](https://astro.build) and [Tailwind CSS](https://tailwindcss.com).

Showcases my projects, experience, skills, and ways to get in touch.

> **Status:** 🚧 In active development (early scaffold from `astro --template minimal` + Tailwind).

## ✨ Features

- 🏠 Landing / hero section
- 💼 Projects showcase
- 🧑‍💻 About / experience
- 🛠️ Skills
- 📬 Contact / social links
- 📱 Fully responsive
- ⚡ Fast, static-first with Astro Islands
- 🔍 SEO-friendly (`robots.txt`, semantic HTML, meta tags)

## 🛠️ Built With

- [Astro](https://astro.build) `^7`
- [Tailwind CSS](https://tailwindcss.com) `^4` via `@tailwindcss/vite`
- [TypeScript](https://www.typescriptlang.org)
- [Prettier](https://prettier.io) + `prettier-plugin-astro` + `prettier-plugin-tailwindcss`
- [pnpm](https://pnpm.io) workspaces

## 🚀 Getting Started

**Prerequisites:**

- Node.js `>=22.12.0` (see `engines` in `package.json`)
- [pnpm](https://pnpm.io/installation)

```sh
pnpm install
pnpm dev
```

Open http://localhost:4321 in your browser.

> Starting the dev server in background is recommended in this repo:
>
> ```sh
> astro dev --background
> astro dev status
> astro dev logs
> astro dev stop
> ```
>
> See `AGENTS.md` for details.

## 🧞 Commands

All commands are run from the root of the project:

| Command                | Action                                           |
| :--------------------- | :----------------------------------------------- |
| `pnpm install`         | Installs dependencies                            |
| `pnpm dev`             | Starts local dev server at `localhost:4321`      |
| `pnpm build`           | Build your production site to `./dist/`          |
| `pnpm preview`         | Preview your build locally, before deploying     |
| `pnpm astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `pnpm astro -- --help` | Get help using the Astro CLI                     |

## 📦 Build & Deployment

```sh
pnpm build
pnpm preview
```

The static output in `./dist/` can be deployed to any static host (Vercel, Netlify, Cloudflare Pages, GitHub Pages).

## 🎨 Customization

- Edit `src/pages/index.astro` for the homepage.
- Add global styles in `src/styles/global.css`.
- Update `public/robots.txt`, favicons in `public/`, and `<head>` metadata in `src/pages/` for SEO.

Guides:

- [Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Styling / Tailwind](https://docs.astro.build/en/guides/styling/)
- [Content collections](https://docs.astro.build/en/guides/content-collections/)

## 📬 Contact

- GitHub: [@gabrielenr10](https://github.com/gabrielenr10)
- Portfolio repo: [gabrielenr10/portfolio](https://github.com/gabrielenr10/portfolio)

## 📄 License

All rights reserved. Feel free to use this repo as inspiration for your own portfolio, but please don't copy content verbatim.
