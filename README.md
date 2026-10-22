# Kshitija Patil: AI Generalist and Design Engineering Portfolio

React + TypeScript + Vite. Plain CSS and inline SVG (no Tailwind, Lucide or Framer Motion), so the bundle stays small.

## Run locally
```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # type-checks, then outputs ./dist
npm run preview
```

## Edit content
- `src/data.ts`: projects, skills, achievements, links. Lines tagged "To complete" show in amber on the site.
- `src/Mockups.tsx`: illustrative SVG mockups. To use real screenshots, put images in `public/screens/` and replace `<Mockup id=... />` in `src/App.tsx` with `<img src="./screens/pennyai.png" alt="..." />`.
- `src/Concept.tsx`: the Concept prototype. It is rule-based; no AI API, no keys.

## Resume
`public/Kshitija_Patil_Resume.pdf` is your supplied resume. To update it, replace that file and keep the name.

## Deploy
- **Vercel:** push to GitHub, Import Project, framework "Vite", build `npm run build`, output `dist`.
- **GitHub Pages:** `npm run build`, then publish `dist` (e.g. GitHub Actions "Deploy static content to Pages" workflow). `base: "./"` is already set.

## Before you submit
- [ ] Add real outcome details, evaluation method, limitations and next steps for each project (amber text).
- [ ] Add Dice/IoU scores and dataset name for the ResUNet project.
- [ ] Confirm the resume metrics (35%, 100+ users, 30%, 3+ languages, 200+ learners, 25%) can be explained in an interview.
- [ ] Add real GitHub / demo links per project only if they exist. Confirm ApexTick contents before adding it.
- [ ] Replace mockups with real screenshots if you have them.
- [ ] Phone number is deliberately not shown on the site; add it if you want it.
- [ ] Test the deployed site on your phone.
