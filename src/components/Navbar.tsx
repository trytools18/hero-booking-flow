
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Globe } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'gr' : 'en');
  };

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
            <a href="#features" className="text-booking-dark hover:text-booking-primary transition-colors">{t('features')}</a>
            <a href="#testimonials" className="text-booking-dark hover:text-booking-primary transition-colors">{t('testimonials')}</a>
            <a href="#why-us" className="text-booking-dark hover:text-booking-primary transition-colors">{t('whyChooseUs')}</a>
          </nav>
          
          <div className="hidden md:flex items-center space-x-4">
            <button
              className="flex items-center space-x-1 text-booking-dark hover:text-booking-primary"
              onClick={toggleLanguage}
            >
              <Globe size={18} />
              <span>{language === 'en' ? 'EL' : 'EN'}</span>
            </button>
            <Button variant="outline" className="border-booking-primary text-booking-primary hover:bg-booking-primary hover:text-white">
              {t('login')}
            </Button>
            <Button className="bg-booking-primary hover:bg-booking-secondary text-white">
              {t('startForFree')}
            </Button>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <button
              className="flex items-center space-x-1 text-booking-dark hover:text-booking-primary"
              onClick={toggleLanguage}
            >
              <Globe size={18} />
              <span>{language === 'en' ? 'EL' : 'EN'}</span>
            </button>
            <button
              className="text-booking-dark"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <a href="#features" className="block px-4 py-2 text-booking-dark hover:bg-gray-100 rounded" onClick={() => setIsMobileMenuOpen(false)}>{t('features')}</a>
            <a href="#testimonials" className="block px-4 py-2 text-booking-dark hover:bg-gray-100 rounded" onClick={() => setIsMobileMenuOpen(false)}>{t('testimonials')}</a>
            <a href="#why-us" className="block px-4 py-2 text-booking-dark hover:bg-gray-100 rounded" onClick={() => setIsMobileMenuOpen(false)}>{t('whyChooseUs')}</a>
            <div className="flex flex-col space-y-2 pt-2 border-t">
              <Button variant="outline" className="w-full justify-center border-booking-primary text-booking-primary hover:bg-booking-primary hover:text-white">
                {t('login')}
              </Button>
              <Button className="w-full justify-center bg-booking-primary hover:bg-booking-secondary text-white">
                {t('startForFree')}
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
