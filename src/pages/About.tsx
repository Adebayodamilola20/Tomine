import { motion } from 'framer-motion';
import { Target, Heart, Award } from 'lucide-react';
import './About.css';

const TIMELINE = [
  { year: '2010', title: 'The Beginning', desc: 'Tomine opened its doors with a simple vision to provide comfort food elevated by modern techniques.' },
  { year: '2015', title: 'First Michelin Star', desc: 'Our dedication to excellence was recognized globally, setting a new standard for our culinary journey.' },
  { year: '2020', title: 'Sustainable Shift', desc: 'Partnered with over 50 local farms to ensure 100% organic and sustainable sourcing.' },
  { year: '2023', title: 'Global Recognition', desc: 'Named among the Top 50 Restaurants worldwide, expanding our influence and team.' },
];

const TEAM = [
  { name: 'Alexandar Vanes', role: 'Executive Chef', image: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?q=80&w=800&auto=format&fit=crop' },
  { name: 'Maria Gonzalez', role: 'Head Pastry Chef', image: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?q=80&w=800&auto=format&fit=crop' },
  { name: 'James Wright', role: 'Meat Chef', image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop' },
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
            A journey of flavors, passion, and culinary perfection.
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
            <h4 className="section-subtitle">Since 2010</h4>
            <h2 className="section-title">The Tomine Heritage</h2>
            <p className="text-secondary mb-4 text-lg">
              What started as a humble bistro in the heart of the city has blossomed into a temple of gastronomy. Tomine is the realization of a lifelong dream to bring people together through the universal language of extraordinary food.
            </p>
            <p className="text-secondary">
              Every dish we serve tells a story—our story. From the crackling warmth of our ovens to the meticulous plating of our desserts, we pour our hearts into every detail.
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
            <img src="https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?q=80&w=600&auto=format&fit=crop" alt="Pouring wine" className="rounded-lg shadow-sm mt-10" />
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section bg-secondary">
        <div className="container">
          <div className="grid grid-cols-3 gap-xl">
            <motion.div 
              className="glass-panel p-8 rounded-lg text-center"
              whileHover={{ y: -5 }}
            >
              <Target size={40} className="text-primary mx-auto mb-4" />
              <h3 className="text-2xl mb-2 font-heading">Our Mission</h3>
              <p className="text-secondary">To redefine fine dining by seamlessly blending authentic traditional recipes with modern, innovative culinary techniques.</p>
            </motion.div>
            <motion.div 
              className="glass-panel p-8 rounded-lg text-center"
              whileHover={{ y: -5 }}
            >
              <Heart size={40} className="text-primary mx-auto mb-4" />
              <h3 className="text-2xl mb-2 font-heading">Our Passion</h3>
              <p className="text-secondary">We believe in the emotional power of food. Our passion is to create memorable experiences that linger long after the last bite.</p>
            </motion.div>
            <motion.div 
              className="glass-panel p-8 rounded-lg text-center"
              whileHover={{ y: -5 }}
            >
              <Award size={40} className="text-primary mx-auto mb-4" />
              <h3 className="text-2xl mb-2 font-heading">Our Promise</h3>
              <p className="text-secondary">Uncompromising quality. We promise to serve only the freshest, sustainably sourced ingredients, prepared with ultimate care.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Chef Section */}
      <section className="section container">
        <div className="grid grid-cols-2 gap-xl items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <img 
              src="https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=800&auto=format&fit=crop" 
              alt="Executive Chef" 
              className="rounded-lg shadow-lg w-full h-auto object-cover"
              style={{ maxHeight: '600px' }}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h4 className="section-subtitle">Meet the Mastermind</h4>
            <h2 className="section-title">Chef Alexandar Vanes</h2>
            <p className="text-secondary mb-6 text-lg">
              "Cooking is not just about combining ingredients; it's an expression of soul, culture, and love. At Tomine, we paint our emotions on the plate."
            </p>
            <p className="text-secondary mb-4">
              With over two decades of international experience across Paris, Tokyo, and New York, Chef Vanes brings a truly global perspective to the table. His philosophy revolves around respecting the ingredient and enhancing its natural flavors rather than masking them.
            </p>
            <img src="https://upload.wikimedia.org/wikipedia/commons/f/ff/Signature_placeholder.svg" alt="Chef Signature" className="h-16 opacity-50 mt-6 filter-dark" />
          </motion.div>
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

      {/* Team Section */}
      <section className="section container">
        <div className="text-center mb-12">
          <h4 className="section-subtitle">Behind the Magic</h4>
          <h2 className="section-title">Meet Our Culinary Artists</h2>
        </div>
        <div className="grid grid-cols-3 gap-lg">
          {TEAM.map((member, idx) => (
            <motion.div 
              key={idx} 
              className="team-card text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <div className="team-img-wrapper mb-4">
                <img src={member.image} alt={member.name} className="team-img" />
              </div>
              <h3 className="text-xl font-heading font-semibold">{member.name}</h3>
              <p className="text-primary">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default About;
