# Menu QR code

Points at **https://tomine-mu.vercel.app/menu** — the menu page on the main
site, which is live now.

| file | use |
| --- | --- |
| `tomine-menu-qr.svg` | printing — vector, stays sharp at any size |
| `tomine-menu-qr.png` | screens, WhatsApp, social — 2048px |

Error correction is level **H**, so the code still scans with up to 30% of it
damaged. That matters on a restaurant table, and it leaves room to drop the
Tomine logo into the middle without breaking the scan.

## Before printing a batch

The URL is baked into the pattern — changing where it points means reprinting
everything. If the standalone menu site in `web-menu/` is going live, or the
restaurant is getting its own domain, settle that **first** and regenerate.

## Regenerating

```sh
npx -y qrcode -o qr/tomine-menu-qr.png -e H -w 2048 "<url>"
npx -y qrcode -t svg -o qr/tomine-menu-qr.svg -e H "<url>"
```

Then scan it with a phone before sending it to print.

## Print sizing

Keep it at least 3cm across for a table card, 2cm minimum. Leave the white
border — scanners need that quiet zone to find the code.
