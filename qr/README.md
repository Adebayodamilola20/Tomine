# Menu QR code

Points at **https://tomine-menu.vercel.app** — the standalone menu site built
from `web-menu/`.

| file | use |
| --- | --- |
| `tomine-menu-qr.svg` | printing — vector, stays sharp at any size |
| `tomine-menu-qr.png` | screens, WhatsApp, social — 2048px |

Error correction is level **H**, so the code still scans with up to 30% of it
damaged. That matters on a restaurant table, and it leaves room to drop the
Tomine logo into the middle without breaking the scan.

## Keeping it working

The URL is baked into the pattern, so the code keeps working for exactly as
long as `tomine-menu.vercel.app` keeps resolving. Two things would break it:

1. **The Vercel project is renamed or deleted.** The subdomain goes with it.
2. **The Vercel account lapses or is closed.**

A `vercel.app` subdomain does not expire on its own and there is nothing to
renew, but it is tied to that account. The only way to be genuinely
reprint-proof is a **custom domain Tomine owns** (e.g. `menu.tomine.ng`)
pointed at the project — then hosting can change without touching a single
printed code.

## Regenerating

```sh
npx -y qrcode -o qr/tomine-menu-qr.png -e H -w 2048 "<url>"
npx -y qrcode -t svg -o qr/tomine-menu-qr.svg -e H "<url>"
```

Always scan the result with a real phone before sending it to print.

## Print sizing

At least 3cm across for a table card, 2cm absolute minimum. Keep the white
border — scanners need that quiet zone to find the code.

## Redeploying the menu site

```sh
npx vercel deploy --prod --yes
```

Run from the repo root. The project's Root Directory is `web-menu`, and the
build reaches into `../src` for the menu data and dish photos.
