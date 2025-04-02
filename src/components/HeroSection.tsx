
import React from 'react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

const HeroSection: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden hero-gradient">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Hero Content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left mb-10 lg:mb-0 staggered-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-booking-dark mb-6">
              {t('mainHeading')}
            </h1>
            <p className="text-xl md:text-2xl text-booking-gray mb-8 max-w-2xl mx-auto lg:mx-0">
              {t('subHeading')}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
              <Button 
                className="text-lg px-8 py-6 gradient-button w-64 sm:w-auto"
                onClick={() => window.location.href = '#signup'}
              >
                {t('startForFree')}
              </Button>
              <Button 
                variant="outline" 
                className="text-lg px-8 py-6 border-booking-primary text-booking-primary hover:bg-booking-primary hover:text-white w-64 sm:w-auto"
                onClick={() => window.location.href = '#demo'}
              >
                {t('bookDemo')}
              </Button>
            </div>
            <div className="mt-8 text-sm text-booking-gray">
              <p>{t('noCardRequired')}</p>
            </div>
          </div>
          
          {/* Hero Image */}
          <div className="w-full lg:w-1/2 relative">
            <div className="relative">
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-booking-light rounded-full opacity-30 animate-pulse"></div>
              <div className="absolute -bottom-5 -right-5 w-24 h-24 bg-booking-primary rounded-full opacity-20"></div>
              
              <div className="relative z-10 shadow-2xl rounded-2xl overflow-hidden border-4 border-white">
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80" 
                  alt="Booking Hero Platform" 
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-booking-dark/30 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-booking-dark">Upcoming Bookings</p>
                      <p className="text-sm text-booking-gray">5 new bookings today</p>
                    </div>
                    <div className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                      +23% this week
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="absolute -bottom-10 -right-5 md:right-10 bg-white rounded-lg shadow-xl p-3 border border-gray-100 animate-bounce">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <p className="text-sm font-medium">New booking confirmed!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Trusted By Section */}
      <div className="container mx-auto px-4 md:px-6 mt-16 md:mt-24">
        <p className="text-center text-booking-gray font-medium mb-6">{t('trustedBy')}</p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          <div className="grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all">
            <span className="text-lg font-bold text-booking-dark">CutMaster</span>
          </div>
          <div className="grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all">
            <span className="text-lg font-bold text-booking-dark">StyleHub</span>
          </div>
          <div className="grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all">
            <span className="text-lg font-bold text-booking-dark">SpaRelax</span>
          </div>
          <div className="grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all">
            <span className="text-lg font-bold text-booking-dark">BeautyLounge</span>
          </div>
          <div className="grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all">
            <span className="text-lg font-bold text-booking-dark">TrimPro</span>
          </div>
        </div>
      </div>
      
      {/* Wave Divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto">
          <path fill="#ffffff" fillOpacity="1" d="M0,32L60,42.7C120,53,240,75,360,74.7C480,75,600,53,720,48C840,43,960,53,1080,58.7C1200,64,1320,64,1380,64L1440,64L1440,120L1380,120C1320,120,1200,120,1080,120C960,120,840,120,720,120C600,120,480,120,360,120C240,120,120,120,60,120L0,120Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
