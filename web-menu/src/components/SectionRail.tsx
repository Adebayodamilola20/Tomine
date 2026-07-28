import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { slugify } from '../utils';

interface SectionRailProps {
  sections: string[];
  activeSection: string;
}

/**
 * The phone stand-in for the desktop section nav: a sticky rail of pills that
 * scrolls sideways and keeps the current section in view.
 */
export default function SectionRail({ sections, activeSection }: SectionRailProps) {
  const railRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const rail = railRef.current;
    const pill = rail?.querySelector<HTMLElement>('.rail-pill.is-active');
    if (!rail || !pill) return;

    // Centre the active pill without dragging the whole page around.
    const target = pill.offsetLeft - (rail.clientWidth - pill.clientWidth) / 2;
    rail.scrollTo({ left: Math.max(0, target), behavior: 'smooth' });
  }, [activeSection]);

  return (
    <div className="section-rail">
      <nav className="section-rail-track" ref={railRef} aria-label="Menu sections">
        {sections.map((section) => {
          const id = slugify(section);
          const active = activeSection === id;
          return (
            <a
              key={section}
              href={`#${id}`}
              className={`rail-pill${active ? ' is-active' : ''}`}
              aria-current={active ? 'true' : undefined}
            >
              {active && (
                <motion.span
                  className="rail-pill-fill"
                  layoutId="rail-pill-fill"
                  transition={{ type: 'spring', stiffness: 420, damping: 36 }}
                  aria-hidden="true"
                />
              )}
              <span className="rail-pill-label">{section}</span>
            </a>
          );
        })}
      </nav>
    </div>
  );
}
