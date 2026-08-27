import { lazy, Suspense, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import IntroScreen from './components/ui/IntroScreen';

/**
 * Home ships in the main bundle because it is what almost everyone lands on.
 * The rest are fetched when someone actually navigates to them, which keeps
 * the first load from carrying five pages nobody has asked for yet.
 */
const About = lazy(() => import('./pages/About'));
const Menu = lazy(() => import('./pages/Menu'));
const Gallery = lazy(() => import('./pages/Gallery'));
const Order = lazy(() => import('./pages/Order'));
const Contact = lazy(() => import('./pages/Contact'));
const OurTeam = lazy(() => import('./pages/OurTeam'));
const Faq = lazy(() => import('./pages/Faq'));
const CorporateCatering = lazy(() => import('./pages/CorporateCatering'));
const OutdoorCatering = lazy(() => import('./pages/OutdoorCatering'));
const HallReservation = lazy(() => import('./pages/HallReservation'));
const OutletLocator = lazy(() => import('./pages/OutletLocator'));

/**
 * The intro is a first-impression flourish, not a toll gate. Once per browser
 * tab is plenty — refreshing or coming back from WhatsApp should drop you
 * straight into the site.
 */
const introAlreadyPlayed = () => {
  try {
    return sessionStorage.getItem('tomine-intro') === 'done';
  } catch {
    // Private browsing can throw on storage access; just play it.
    return false;
  }
};

const prefersReducedMotion = () =>
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function App() {
  const [showIntro, setShowIntro] = useState(
    () => !introAlreadyPlayed() && !prefersReducedMotion()
  );

  const finishIntro = () => {
    try {
      sessionStorage.setItem('tomine-intro', 'done');
    } catch {
      // Nothing to do — the intro simply plays again next time.
    }
    setShowIntro(false);
  };

  return (
    <>
      <AnimatePresence>
        {showIntro && <IntroScreen onComplete={finishIntro} />}
      </AnimatePresence>

      {/* Mounted underneath the intro so the hero images and fonts are already
          downloading while the wordmark animates, instead of starting from
          scratch the moment it lifts away. */}
      <BrowserRouter>
        <Suspense fallback={null}>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="menu" element={<Menu />} />
              <Route path="gallery" element={<Gallery />} />
              <Route path="order" element={<Order />} />
              <Route path="contact" element={<Contact />} />
              <Route path="our-team" element={<OurTeam />} />
              <Route path="faq" element={<Faq />} />
              <Route path="corporate-catering" element={<CorporateCatering />} />
              <Route path="outdoor-catering" element={<OutdoorCatering />} />
              <Route path="hall-reservation" element={<HallReservation />} />
              <Route path="outlet-locator" element={<OutletLocator />} />
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;
