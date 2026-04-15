import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Send } from 'lucide-react';
import Button from '../components/ui/Button';
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
              <div className="contact-info-item flex gap-md items-center">
                <div className="icon-circle border-primary text-primary"><MapPin size={24} /></div>
                <div>
                  <h4 className="font-heading font-semibold text-xl">Address</h4>
                  <p className="text-secondary">Lagos</p>
                </div>
              </div>
              <div className="contact-info-item flex gap-md items-center mt-6">
                <div className="icon-circle border-primary text-primary"><Phone size={24} /></div>
                <div>
                  <h4 className="font-heading font-semibold text-xl">Phone</h4>
                  <p className="text-secondary">09036152411</p>
                </div>
              </div>
              <div className="contact-info-item flex gap-md items-center mt-6">
                <div className="icon-circle border-primary text-primary"><Mail size={24} /></div>
                <div>
                  <h4 className="font-heading font-semibold text-xl">Email</h4>
                  <p className="text-secondary">hello@tominarestaurant.com</p>
                </div>
              </div>
            </div>

            <div className="map-container mt-12 rounded-lg overflow-hidden shadow-md">
              {/* Fake Google Map Placeholder that looks premium */}
              <div className="mock-map flex items-center justify-center bg-secondary w-full h-64 relative">
                <div className="absolute inset-0 z-0">
                  <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=800&auto=format&fit=crop" alt="Map outline" className="w-full h-full object-cover opacity-30 grayscale" />
                </div>
                <div className="relative z-10 flex-col items-center justify-center text-center">
                  <MapPin size={40} className="text-primary mb-2 mx-auto" />
                  <span className="font-heading font-bold text-lg">TOMINE LOCATION</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            className="glass-panel p-8 md:p-12 rounded-xl"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl font-heading mb-6">Send a Message</h3>
            <form className="flex-col gap-md" onSubmit={(e) => e.preventDefault()}>
              <div className="form-group mb-6">
                <label className="form-label block mb-2">Full Name</label>
                <input type="text" className="form-input w-full p-4" placeholder="Your Name" required />
              </div>
              <div className="form-group mb-6">
                <label className="form-label block mb-2">Email Address</label>
                <input type="email" className="form-input w-full p-4" placeholder="your@email.com" required />
              </div>
              <div className="form-group mb-6">
                <label className="form-label block mb-2">Subject</label>
                <input type="text" className="form-input w-full p-4" placeholder="How can we help?" required />
              </div>
              <div className="form-group mb-8">
                <label className="form-label block mb-2">Message</label>
                <textarea className="form-input w-full p-4 h-32 resize-none" placeholder="Write your message here..." required></textarea>
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
