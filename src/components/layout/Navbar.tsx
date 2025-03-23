
import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, Heart } from 'lucide-react';
import Button from '../common/Button';
import { cn } from '@/lib/utils';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Programs', path: '/programs' },
  { name: 'Get Involved', path: '/get-involved' },
  { name: 'Success Stories', path: '/stories' },
  { name: 'Blog & News', path: '/blog' },
  { name: 'Events', path: '/events' },
  { name: 'Contact', path: '/contact' },
];

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on larger screens
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileMenuOpen(false);
      }
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header 
      className={cn(
        'fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300',
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-subtle py-3' : 'bg-transparent py-5'
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link 
          to="/" 
          className="flex items-center z-10"
          aria-label="Home"
        >
          <Heart className="text-primary w-6 h-6 mr-2" />
          <span className="font-display text-xl font-bold">HeartImpact</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) => 
                cn(
                  'nav-item text-sm font-medium transition-colors py-1',
                  isActive ? 'text-primary' : 'text-foreground hover:text-primary'
                )
              }
            >
              {item.name}
            </NavLink>
          ))}
        </nav>

        {/* Donate Button */}
        <div className="hidden lg:block z-10">
          <Button variant="primary" size="md" as={Link} to="/donate">
            Donate Now
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-foreground z-10"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu */}
        <div 
          className={cn(
            'fixed inset-0 bg-white flex flex-col lg:hidden pt-20 pb-6 px-4 transition-transform duration-300 ease-in-out',
            mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          )}
        >
          <nav className="flex flex-col space-y-4 mt-8">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) => 
                  cn(
                    'text-lg font-medium py-2 border-b border-gray-100',
                    isActive ? 'text-primary' : 'text-foreground'
                  )
                }
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </NavLink>
            ))}
          </nav>
          
          <div className="mt-8">
            <Button 
              variant="primary" 
              size="lg" 
              fullWidth 
              as={Link} 
              to="/donate"
              onClick={() => setMobileMenuOpen(false)}
            >
              Donate Now
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
