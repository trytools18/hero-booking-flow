
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between py-4">
          <a href="#" className="flex items-center">
            <span className="text-2xl font-bold text-booking-dark">
              <span className="text-booking-primary">Booking</span>Hero
            </span>
          </a>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-booking-dark hover:text-booking-primary transition-colors">Features</a>
            <a href="#testimonials" className="text-booking-dark hover:text-booking-primary transition-colors">Testimonials</a>
            <a href="#why-us" className="text-booking-dark hover:text-booking-primary transition-colors">Why Choose Us</a>
            <a href="#uk-launch" className="text-booking-dark hover:text-booking-primary transition-colors">UK Launch</a>
          </nav>
          
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" className="border-booking-primary text-booking-primary hover:bg-booking-primary hover:text-white">
              Login
            </Button>
            <Button className="bg-booking-primary hover:bg-booking-secondary text-white">
              Start for Free
            </Button>
          </div>
          
          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-booking-dark"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <a href="#features" className="block px-4 py-2 text-booking-dark hover:bg-gray-100 rounded" onClick={() => setIsMobileMenuOpen(false)}>Features</a>
            <a href="#testimonials" className="block px-4 py-2 text-booking-dark hover:bg-gray-100 rounded" onClick={() => setIsMobileMenuOpen(false)}>Testimonials</a>
            <a href="#why-us" className="block px-4 py-2 text-booking-dark hover:bg-gray-100 rounded" onClick={() => setIsMobileMenuOpen(false)}>Why Choose Us</a>
            <a href="#uk-launch" className="block px-4 py-2 text-booking-dark hover:bg-gray-100 rounded" onClick={() => setIsMobileMenuOpen(false)}>UK Launch</a>
            <div className="flex flex-col space-y-2 pt-2 border-t">
              <Button variant="outline" className="w-full justify-center border-booking-primary text-booking-primary hover:bg-booking-primary hover:text-white">
                Login
              </Button>
              <Button className="w-full justify-center bg-booking-primary hover:bg-booking-secondary text-white">
                Start for Free
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
