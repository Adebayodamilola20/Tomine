import { useEffect, useMemo, useState } from 'react';
import { MENU, type MenuItem } from '@tomine/data/menu';
import Header from './components/Header';
import Hero from './components/Hero';
import SectionRail from './components/SectionRail';
import MenuSection from './components/MenuSection';
import Interlude from './components/Interlude';
import Lightbox from './components/Lightbox';
import OrderFab from './components/OrderFab';
import Footer from './components/Footer';
import { slugify } from './utils';
import { useSmoothScroll } from './useSmoothScroll';

/** Dishes the hero should lead with, in order. */
const PLATE_ORDER = [
  'Croaker Fish',
  'Chocolate Doughnut',
  'Egusi Soup',
  'Meat Pie',
  'Jollof Rice',
  'Cup Cake',
  'Efo-Riro Soup',
  'Scotch Egg',
  'Fried Rice',
  'Ring Doughnut',
];

/**
 * Build the two hero reels out of the menu itself, so they can never point at a
 * photo that has been withdrawn. The ranked list is dealt alternately into the
 * left and right frames, which then cycle independently.
 */
const heroReels = () => {
  const withPhotos = MENU.flatMap((section) => section.items).filter((item) => item.image);
  const ranked = [...withPhotos].sort(
    (a, b) =>
      (PLATE_ORDER.indexOf(a.name) + 1 || 99) - (PLATE_ORDER.indexOf(b.name) + 1 || 99)
  );

  const pool = ranked.slice(0, 10).map((item) => ({ src: item.image!, alt: item.name }));
  return [pool.filter((_, i) => i % 2 === 0), pool.filter((_, i) => i % 2 === 1)];
};

export default function App() {
  const [selected, setSelected] = useState<MenuItem | null>(null);
  const [activeSection, setActiveSection] = useState(slugify(MENU[0].category));

  useSmoothScroll();

  const sections = useMemo(() => MENU.map((s) => s.category), []);
  const itemCount = useMemo(
    () => MENU.reduce((total, section) => total + section.items.length, 0),
    []
  );
  const reels = useMemo(heroReels, []);

  // Keep the header nav in step with whichever section is on screen.
  useEffect(() => {
    const nodes = sections
      .map((section) => document.getElementById(slugify(section)))
      .filter((node): node is HTMLElement => node !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
        if (visible) setActiveSection(visible.target.id);
      },
      { rootMargin: '-30% 0px -55% 0px', threshold: 0 }
    );

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, [sections]);

  return (
    <>
      <Header sections={sections} activeSection={activeSection} />

      <main>
        <Hero reels={reels} itemCount={itemCount} />

        <SectionRail sections={sections} activeSection={activeSection} />

        <div className="menu-body" id="menu">
          {MENU.map((section, index) => (
            <div key={section.category}>
              <MenuSection section={section} index={index} onSelect={setSelected} />
              {index === 0 && (
                <Interlude>
                  Baked through the morning, so the tray you see is the tray that came
                  out of the oven.
                </Interlude>
              )}
            </div>
          ))}
        </div>
      </main>

      <Footer />

      <OrderFab hidden={selected !== null} />
      <Lightbox item={selected} onClose={() => setSelected(null)} />
    </>
  );
}
