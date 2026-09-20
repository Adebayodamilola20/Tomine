import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './styles.css';
import { SITE_LOCKED } from '@tomine/data/siteLock';
import NotFound from './NotFound';

/* --- 404 gate: ON -------------------------------------------------------
 * The flag is shared with the main site (src/data/siteLock.ts, read here
 * through the @tomine alias), so one edit covers both. The 404 component
 * is local — see NotFound.tsx for why.
 *
 * To hand the site back: set SITE_LOCKED to false in src/data/siteLock.ts.
 * ---------------------------------------------------------------------- */

createRoot(document.getElementById('root')!).render(
  <StrictMode>{SITE_LOCKED ? <NotFound /> : <App />}</StrictMode>
);
