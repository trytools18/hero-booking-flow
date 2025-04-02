
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

interface CTASectionProps {
  title: string;
  subtitle: string;
  primaryCTA: string;
  secondaryCTA?: string;
  backgroundStyle?: 'light' | 'dark' | 'gradient';
}

const CTASection: React.FC<CTASectionProps> = ({ 
  title, 
  subtitle, 
  primaryCTA, 
  secondaryCTA,
  backgroundStyle = 'light'
}) => {
  let bgClasses = '';
  let textClasses = '';
  
  switch (backgroundStyle) {
    case 'dark':
      bgClasses = 'bg-booking-dark';
      textClasses = 'text-white';
      break;
    case 'gradient':
      bgClasses = 'bg-gradient-to-r from-booking-primary to-booking-secondary';
      textClasses = 'text-white';
      break;
    default:
      bgClasses = 'bg-gray-50';
      textClasses = 'text-booking-dark';
  }
  
  return (
    <section className={`py-16 ${bgClasses}`}>
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${textClasses}`}>
          {title}
        </h2>
        <p className={`text-xl mb-8 max-w-2xl mx-auto ${backgroundStyle !== 'light' ? 'text-white/90' : 'text-booking-gray'}`}>
          {subtitle}
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <Button 
            className={`text-lg px-8 py-6 ${
              backgroundStyle === 'light' 
                ? 'gradient-button' 
                : 'bg-white text-booking-primary hover:bg-gray-100'
            }`}
          >
            {primaryCTA}
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          
          {secondaryCTA && (
            <Button 
              variant="outline" 
              className={`text-lg px-8 py-6 ${
                backgroundStyle === 'light'
                  ? 'border-booking-primary text-booking-primary hover:bg-booking-primary hover:text-white' 
                  : 'border-white text-white hover:bg-white/20'
              }`}
            >
              {secondaryCTA}
            </Button>
          )}
        </div>
      </div>
    </section>
  );
};

export default CTASection;
