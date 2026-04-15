import { Link } from 'react-router-dom';
import { Camera, Share2, MessageCircle, MapPin, Phone, Mail } from 'lucide-react';
import './Footer.css';
import Button from '../ui/Button';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="grid grid-cols-4 gap-xl footer-grid">
          {/* Brand */}
          <div className="footer-col brand-col">
            <Link to="/" className="footer-logo">Tomine<span>.</span></Link>
            <p className="text-secondary mt-4">Experience taste like never before. A harmonious blend of tradition and modern culinary artistry.</p>
            <div className="social-links mt-6">
              <a href="#" className="social-icon"><Camera size={20} /></a>
              <a href="#" className="social-icon"><Share2 size={20} /></a>
              <a href="#" className="social-icon"><MessageCircle size={20} /></a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="footer-col">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links">
              <li><Link to="/about">Our Story</Link></li>
              <li><Link to="/menu">Menu</Link></li>
              <li><Link to="/gallery">Gallery</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="footer-col contact-col">
            <h4 className="footer-heading">Contact Us</h4>
            <ul className="footer-contact">
              <li className="flex items-center gap-sm"><MapPin size={18} className="text-primary" /> <span>Lagos</span></li>
              <li className="flex items-center gap-sm"><Phone size={18} className="text-primary" /> <span>09036152411</span></li>
              <li className="flex items-center gap-sm"><Mail size={18} className="text-primary" /> <span>hello@tominarestaurant.com</span></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="footer-col">
            <h4 className="footer-heading">Newsletter</h4>
            <p className="text-secondary mb-4">Subscribe to receive updates, access to exclusive deals, and more.</p>
            <form className="newsletter-form flex-col gap-sm" onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="Email address" className="newsletter-input" required />
              <Button type="submit" fullWidth>Subscribe</Button>
            </form>
          </div>
        </div>
        
        <div className="footer-bottom flex justify-between items-center">
          <p className="text-secondary text-sm">&copy; {new Date().getFullYear()} Tomine Restaurant. All rights reserved.</p>
          <div className="footer-bottom-links">
            <Link to="#">Privacy Policy</Link>
            <Link to="#">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
