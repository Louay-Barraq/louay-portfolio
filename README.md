# Louay Barraq — Portfolio

Personal portfolio in English, French and Arabic (RTL), built with [Astro](https://astro.build) in the "Developer Terminal" style.

| Page | URL |
| --- | --- |
| English | `/` |
| Français | `/fr/` |
| العربية | `/ar/` |

## Run locally

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # static site in dist/
npx astro check    # type check
```

## Where to change things

| What | File |
| --- | --- |
| Texts in each language (bio, project descriptions, experience, education…) | `src/i18n/en.ts`, `fr.ts`, `ar.ts` |
| Links, project list, years, stacks, app status, certifications, tech stack | `src/data/shared.ts` |
| Colors, spacing, mobile layout | `src/styles/global.css` |
| GitHub stats snapshot (used when no token is set) | `src/lib/github.ts` |
| CVs | `public/cv/Louay-Barraq-CV-EN.pdf`, `public/cv/Louay-Barraq-CV-FR.pdf` |

### Photo, banners and app icons

1. Put the files in `public/images/` (e.g. `public/images/louay.jpg`, `public/images/projects/fixtura.webp`, `public/images/apps/converti.png`).
2. In `src/data/shared.ts` set `profile.photo`, a project's `banner`, or an app's `icon` to that path (e.g. `'/images/louay.jpg'`).

Until then, the placeholders from the design are shown.

## Environment variables

Copy `.env.example` to `.env` locally, and add the same variables in Vercel → Project → Settings → Environment Variables.

| Variable | Purpose |
| --- | --- |
| `GITHUB_TOKEN` | Fine-grained, read-only token of your GitHub account. Lets the build fetch live stats (public repos, commits this year incl. private ones, top language, 3-month grid). |
| `PUBLIC_WEB3FORMS_KEY` | Free key from [web3forms.com](https://web3forms.com) (enter louaybarraq@gmail.com). Without it, the form opens the visitor's mail app. |
| `SITE_URL` | Final address (e.g. `https://louaybarraq.me`), used for canonical and hreflang links. |

## Deploy on Vercel

1. Push this folder to a GitHub repository.
2. On [vercel.com](https://vercel.com) → **Add New → Project** → import the repository. Vercel detects Astro automatically.
3. Add the environment variables above, then deploy.
4. **Keep the GitHub stats fresh:** Vercel → Project → Settings → Git → **Deploy Hooks** → create one for `main`. Copy its URL into GitHub → repo → Settings → Secrets and variables → Actions as `VERCEL_DEPLOY_HOOK`. The workflow in `.github/workflows/refresh-stats.yml` rebuilds the site every day.

## Custom domain (Namecheap)

1. Vercel → Project → Settings → **Domains** → add your domain (e.g. `louaybarraq.me`).
2. In Namecheap → Domain List → **Manage** → Advanced DNS, add the records Vercel shows (usually an `A` record `@ → 76.76.21.21` and a `CNAME` `www → cname.vercel-dns.com`).
3. Set `SITE_URL` to the new address and redeploy.
