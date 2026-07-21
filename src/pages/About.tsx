import { motion } from 'framer-motion';
import { Target, Compass, ShieldCheck, Sprout, Users } from 'lucide-react';
import './About.css';

const TIMELINE = [
  { year: '2017', title: 'The First Oven', desc: 'On August 17, 2017, we opened our first bakery with a single locally made oven, a glass counter, and a simple promise: to bake fresh every single day.' },
  { year: '2022', title: 'A Full Table', desc: 'In November 2022, driven by our guests’ desire for complete culinary experiences, we launched our full-service restaurant — hearty home-cooked meals, comforting soups, and signature rice dishes made for sharing.' },
  { year: 'Today', title: 'Two Vibrant Branches', desc: 'We now serve you from two branches that bring it all together: fresh bakery favourites in the morning and comforting meals all day. Still family-owned, still cooking from the heart.' },
];

const VALUES = [
  { icon: ShieldCheck, title: 'Uncompromising Integrity', desc: 'A steadfast commitment to honesty in everything we bake, serve, and promise.' },
  { icon: Sprout, title: 'Purposeful Empowerment', desc: 'An intentional process of equipping individuals and communities to grow and thrive.' },
  { icon: Users, title: 'Community-Concentric', desc: 'Designing our products and services around the collective needs of the people we serve.' },
];

const About = () => {
  return (
    <div className="about-page">
      {/* Hero Header */}
      <section className="about-hero flex items-center justify-center text-center">
        <div className="about-hero-overlay"></div>
        <motion.div
          className="container relative z-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-white text-5xl md:text-6xl font-bold mb-4">Our Story</h1>
          <p className="text-white text-xl opacity-90 max-w-2xl mx-auto">
            Baking fresh every day since 2017 &mdash; nourishment, celebration, and genuine community.
          </p>
        </motion.div>
      </section>

      {/* Story Section */}
      <section className="section container">
        <div className="grid grid-cols-2 gap-xl items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h4 className="section-subtitle">Since 2017</h4>
            <h2 className="section-title">From a Single Oven to Two Branches</h2>
            <p className="text-secondary mb-4 text-lg">
              On August 17, 2017, we opened our first bakery with a single locally made oven, a glass counter, and a simple promise: to bake fresh every single day. What began as a modest shop quickly grew into an essential part of our community&rsquo;s daily life. For five years we mastered the basics &mdash; perfecting the crust, the rise, and the flavour, learning exactly what our neighbours loved.
            </p>
            <p className="text-secondary mb-4">
              Driven by our guests&rsquo; desire for complete culinary experiences, we expanded in November 2022 by launching our full-service restaurant. We brought that same commitment to freshness to full plates, serving hearty home-cooked meals, comforting soups, and signature rice dishes designed for sharing.
            </p>
            <p className="text-secondary">
              Today, we proudly serve you from two vibrant branches that seamlessly bring it all together: fresh bakery favourites in the morning and comforting meals all day. From that single oven in 2017 to our dual-branch operations today, we remain family-owned, deeply hands-on, and cooking entirely from the heart. Thank you for letting us feed you &mdash; we are just getting started.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="about-gallery grid grid-cols-2 gap-sm"
          >
            <img src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=600&auto=format&fit=crop" alt="Restaurant interior" className="rounded-lg shadow-sm" />
            <img src="https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=600&auto=format&fit=crop" alt="Freshly baked bread" className="rounded-lg shadow-sm mt-10" />
          </motion.div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section bg-secondary">
        <div className="container">
          <div className="text-center mb-12">
            <h4 className="section-subtitle">What Drives Us</h4>
            <h2 className="section-title">Our Vision &amp; Mission</h2>
          </div>
          <div className="grid grid-cols-2 gap-xl">
            <motion.div
              className="glass-panel p-8 rounded-lg"
              whileHover={{ y: -5 }}
            >
              <Compass size={40} className="text-primary mb-4" />
              <h3 className="text-2xl mb-2 font-heading">Our Vision</h3>
              <p className="text-secondary">
                To establish ourselves as Lagos&rsquo; most cherished bakery and restaurant destination, where culinary excellence meets heartfelt hospitality. We commit to crafting every meal with purpose, transforming daily dining into an experience of nourishment, celebration, and genuine community connection.
              </p>
            </motion.div>
            <motion.div
              className="glass-panel p-8 rounded-lg"
              whileHover={{ y: -5 }}
            >
              <Target size={40} className="text-primary mb-4" />
              <h3 className="text-2xl mb-2 font-heading">Our Mission</h3>
              <p className="text-secondary">
                To enrich our community by serving exceptionally fresh, high-quality, and accessible baked goods and meals that bring people together. We pledge an unwavering commitment to premium ingredients, rigorous hygiene standards, and world-class customer service, while actively driving local economic growth through empowering employment. We transcend traditional dining &mdash; we deliver pure joy.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section container">
        <div className="text-center mb-12">
          <h4 className="section-subtitle">What We Stand For</h4>
          <h2 className="section-title">Our Core Values</h2>
        </div>
        <div className="grid grid-cols-3 gap-xl">
          {VALUES.map((value, idx) => (
            <motion.div
              key={value.title}
              className="glass-panel p-8 rounded-lg text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <value.icon size={40} className="text-primary mx-auto mb-4" />
              <h3 className="text-2xl mb-2 font-heading">{value.title}</h3>
              <p className="text-secondary">{value.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Timeline Section */}
      <section className="section bg-secondary timeline-section">
        <div className="container">
          <div className="text-center mb-12">
            <h4 className="section-subtitle">Our Journey</h4>
            <h2 className="section-title">The Evolution of Tomine</h2>
          </div>
          <div className="timeline-container">
            {TIMELINE.map((item, idx) => (
              <motion.div
                key={idx}
                className={`timeline-item ${idx % 2 === 0 ? 'left' : 'right'}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6 }}
              >
                <div className="timeline-content glass-panel">
                  <span className="timeline-year">{item.year}</span>
                  <h3 className="timeline-title">{item.title}</h3>
                  <p className="text-secondary">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;
