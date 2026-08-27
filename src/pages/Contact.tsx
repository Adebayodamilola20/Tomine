import { motion } from 'framer-motion';
import { MapPin, Mail, Send, Navigation } from 'lucide-react';
import Button from '../components/ui/Button';
import { BRANCHES } from '../data/locations';
import './OrderContact.css';

const Contact = () => {
  return (
    <div className="contact-page pb-20">
      {/* Header */}
      <section className="page-header flex items-center justify-center text-center">
        <div className="page-header-overlay"></div>
        <motion.div 
          className="container relative z-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-white text-5xl md:text-6xl font-bold mb-4">Get in Touch</h1>
          <p className="text-white text-xl opacity-90 max-w-2xl mx-auto">
            We would love to hear from you. Reach out for private events, catering, or any inquiries.
          </p>
        </motion.div>
      </section>

      <section className="container mt-12 pt-10">
        <div className="grid grid-cols-2 gap-xl">
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h4 className="section-subtitle">Reach Us</h4>
            <h2 className="section-title">Contact Information</h2>
            <p className="text-secondary mb-8 text-lg">
              Our dedicated team is here to ensure your experience with Tomine is flawless from start to finish. Feel free to contact us via phone, email, or visit us in person.
            </p>
            
            <div className="contact-info-list flex-col gap-lg">
              {BRANCHES.map((branch) => (
                <div className="contact-info-item flex gap-md items-center" key={branch.name}>
                  <div className="icon-circle border-primary text-primary"><MapPin size={24} /></div>
                  <div>
                    <h4 className="font-heading font-semibold text-xl">{branch.name}</h4>
                    <p className="text-secondary">{branch.address}</p>
                    <p className="text-secondary">
                      <a href={branch.phoneHref}>{branch.phone}</a>
                    </p>
                  </div>
                </div>
              ))}
              {/* The 07079322329 line that used to sit here on its own is the
                  Agura Road branch's number, so it now appears under that
                  branch instead of twice under two different labels. */}
              <div className="contact-info-item flex gap-md items-center mt-6">
                <div className="icon-circle border-primary text-primary"><Mail size={24} /></div>
                <div>
                  <h4 className="font-heading font-semibold text-xl">Email</h4>
                  <p className="text-secondary">hello@tominarestaurant.com</p>
                </div>
              </div>
            </div>

            {/* Was a stock photo of an antique world map with "TOMINE LOCATION"
                printed over it. These open the real address in Google Maps. */}
            <div className="directions-list">
              {BRANCHES.map((branch) => (
                <a
                  key={branch.name}
                  className="directions-link"
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                    `${branch.name}, ${branch.address}`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Navigation size={20} />
                  <span>Get directions to {branch.name}</span>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            className="glass-panel contact-form-panel"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="contact-form-title">Send a Message</h3>
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="form-group">
                <label className="form-label" htmlFor="cf-name">Full Name</label>
                <input id="cf-name" type="text" className="form-input" placeholder="Your Name" required />
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="cf-email">Email Address</label>
                <input id="cf-email" type="email" className="form-input" placeholder="your@email.com" required />
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="cf-subject">Subject</label>
                <input id="cf-subject" type="text" className="form-input" placeholder="How can we help?" required />
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="cf-message">Message</label>
                <textarea id="cf-message" className="form-input" placeholder="Write your message here..." required></textarea>
              </div>
              <Button type="submit" size="lg" fullWidth className="icon-btn justify-center">
                Send Message <Send size={18} />
              </Button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
