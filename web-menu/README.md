# Tomine — The Menu

The standalone menu website. It is its own Vite app with its own build and its own
deployment; the main site's `/menu` page still exists and is unchanged.

## Running it

```bash
cd web-menu
npm install
npm run dev      # http://localhost:5173
npm run build    # -> web-menu/dist
```

## Where the menu comes from

Both sites read `src/data/menu.ts` **in the main site** — this app imports it through
the `@tomine` alias (`web-menu/vite.config.ts`), and the dish photos come from
`src/assets/menu/`. So a price change or a wrong photo is fixed once, in
`../src/data/menu.ts`, and both sites pick it up on the next build.

An item with no `image` renders a "Photo coming soon" tile rather than a wrong photo.

## Deploying

Deploy as a **second Vercel project** pointing at the same repo:

- Root Directory: `web-menu`
- Build Command: `npm run build`
- Output Directory: `dist`
- Include files outside the root directory: **on** (it reads `../src`)

`vercel.json` here handles the SPA rewrite. Update `MAIN_SITE_URL` and `CONTACT` in
`src/config.ts` if the domain or phone numbers change.
