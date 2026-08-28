import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './styles.css';

/* --- 404 gate: OFF so the client can review the site ---------------------
 * The gate lives in the main site at src/gate.tsx and is read through the
 * @tomine alias. To put the 404 back, uncomment the import and the render
 * line below, comment out the plain <App /> render, and set SITE_LOCKED
 * to true in gate.tsx — that one flag covers both sites.
 *
 * import { SITE_LOCKED, NotFound } from '@tomine/gate';
 * ---------------------------------------------------------------------- */

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    {/* <StrictMode>{SITE_LOCKED ? <NotFound /> : <App />}</StrictMode> */}
  </StrictMode>
);
