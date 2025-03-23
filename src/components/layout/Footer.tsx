
import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-navy-800 text-white">
      <div className="container mx-auto px-4">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-16">
          {/* Column 1: Organization Info */}
          <div className="space-y-4">
            <div className="flex items-center mb-6">
              <Heart className="text-gold-400 w-6 h-6 mr-2" />
              <span className="font-display text-xl font-bold">HeartImpact</span>
            </div>
            <p className="text-gray-300 max-w-xs">
              Empowering communities through sustainable development and compassionate action.
            </p>
            <div className="flex space-x-4 pt-4">
              <a href="https://facebook.com" aria-label="Facebook" className="text-gray-300 hover:text-gold-400 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://twitter.com" aria-label="Twitter" className="text-gray-300 hover:text-gold-400 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="https://instagram.com" aria-label="Instagram" className="text-gray-300 hover:text-gold-400 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://youtube.com" aria-label="YouTube" className="text-gray-300 hover:text-gold-400 transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-gray-300 hover:text-gold-400 transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/programs" className="text-gray-300 hover:text-gold-400 transition-colors">Our Programs</Link>
              </li>
              <li>
                <Link to="/get-involved" className="text-gray-300 hover:text-gold-400 transition-colors">Get Involved</Link>
              </li>
              <li>
                <Link to="/stories" className="text-gray-300 hover:text-gold-400 transition-colors">Success Stories</Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-300 hover:text-gold-400 transition-colors">Blog & News</Link>
              </li>
              <li>
                <Link to="/donate" className="text-gray-300 hover:text-gold-400 transition-colors">Donate</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={20} className="text-gold-400 mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-300">123 Impact Avenue, City, Country, 10001</span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="text-gold-400 mr-3 flex-shrink-0" />
                <a href="tel:+15551234567" className="text-gray-300 hover:text-gold-400 transition-colors">+1 (555) 123-4567</a>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="text-gold-400 mr-3 flex-shrink-0" />
                <a href="mailto:info@heartimpact.org" className="text-gray-300 hover:text-gold-400 transition-colors">info@heartimpact.org</a>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Stay Updated</h3>
            <p className="text-gray-300 mb-4">
              Subscribe to our newsletter for updates on our work and impact.
            </p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-4 py-2 rounded-md bg-navy-700 border border-navy-600 text-white focus:outline-none focus:ring-2 focus:ring-gold-400 transition-all"
                required
              />
              <button
                type="submit"
                className="w-full px-4 py-2 bg-gold-500 hover:bg-gold-600 text-navy-900 font-medium rounded-md transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Footer bottom */}
        <div className="py-6 border-t border-navy-700 flex flex-col md:flex-row items-center justify-between text-sm text-gray-400">
          <div>© 2023 HeartImpact. All rights reserved.</div>
          <div className="flex items-center space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="hover:text-gold-400 transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-gold-400 transition-colors">Terms of Service</Link>
            <Link to="/contact" className="hover:text-gold-400 transition-colors">Contact Us</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
