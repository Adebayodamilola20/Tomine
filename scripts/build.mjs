#!/usr/bin/env node
/**
 * Build entry for both sites.
 *
 * A 404 rendered by the app is only a front door: the real bundle, the menu
 * data and every dish photo still ship to the server, so anyone with a direct
 * asset URL walks straight past it. While SITE_LOCKED is true this script does
 * not build the app at all — it emits a single static index.html containing
 * the 404 and nothing else. There is then nothing on the server to reach.
 *
 * Set SITE_LOCKED to false in src/data/siteLock.ts and the normal build runs.
 */
import { execSync } from 'node:child_process';
import { mkdirSync, rmSync, writeFileSync, readFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const repoRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const lockFile = resolve(repoRoot, 'src/data/siteLock.ts');

/* Read the flag as text. The build runs before any bundling, so it cannot
   import the TypeScript module directly. */
const source = readFileSync(lockFile, 'utf8');
const match = source.match(/export\s+const\s+SITE_LOCKED\s*=\s*(true|false)/);
if (!match) {
  console.error(`Could not find SITE_LOCKED in ${lockFile}`);
  process.exit(1);
}
const locked = match[1] === 'true';

const dist = resolve(process.cwd(), 'dist');

if (!locked) {
  console.log('SITE_LOCKED is false — building the site normally.');
  execSync('tsc -b && vite build', { stdio: 'inherit' });
  process.exit(0);
}

const FONT =
  'system-ui,&quot;Segoe UI&quot;,Roboto,Helvetica,Arial,sans-serif';

const page = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="robots" content="noindex, nofollow" />
    <title>404: This page could not be found.</title>
    <style>
      html,body{height:100%}
      body{margin:0;background:#fff;color:#000;font-family:${FONT.replace(/&quot;/g, '"')}}
      .wrap{display:flex;align-items:center;justify-content:center;height:100vh}
      .row{display:flex;align-items:center}
      h1{display:inline-block;margin:0 20px 0 0;padding-right:23px;font-size:24px;font-weight:500;
         vertical-align:top;line-height:49px;border-right:1px solid rgba(0,0,0,.3)}
      h2{margin:0;font-size:14px;font-weight:400;line-height:49px}
    </style>
  </head>
  <body>
    <div class="wrap"><div class="row"><h1>404</h1><div><h2>This page could not be found.</h2></div></div></div>
  </body>
</html>
`;

rmSync(dist, { recursive: true, force: true });
mkdirSync(dist, { recursive: true });
writeFileSync(resolve(dist, 'index.html'), page);

console.log('SITE_LOCKED is true — emitted a 404-only dist. The app was not built.');
