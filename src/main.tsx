import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';

/* --- 404 gate: OFF so the client can review the site ---------------------
 * src/gate.tsx is still in the repo. To put the 404 back in front of both
 * sites, uncomment the import and the render line below, comment out the
 * plain <App /> render, and make sure SITE_LOCKED is true in gate.tsx.
 *
 * import { SITE_LOCKED, NotFound } from './gate';
 * ---------------------------------------------------------------------- */

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    {/* <StrictMode>{SITE_LOCKED ? <NotFound /> : <App />}</StrictMode> */}
  </StrictMode>,
);
