
import React from 'react';
import FeatureCard from './FeatureCard';
import { Calendar, Users, BellRing, BarChart3, Globe } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const FeaturesSection: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <section id="features" className="py-20 features-gradient">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="section-title">{t('featuresTitle')}</h2>
          <p className="section-subtitle">{t('featuresSubtitle')}</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 staggered-fade-in">
          <FeatureCard 
            icon={Calendar}
            title={t('onlineBooking')}
            description={t('onlineBookingDesc')}
          />
          
          <FeatureCard 
            icon={Users}
            title={t('crmTitle')}
            description={t('crmDesc')}
          />
          
          <FeatureCard 
            icon={BellRing}
            title={t('remindersTitle')}
            description={t('remindersDesc')}
          />
          
          <FeatureCard 
            icon={BarChart3}
            title={t('analyticsTitle')}
            description={t('analyticsDesc')}
          />
          
          <FeatureCard 
            icon={Globe}
            title={t('marketplaceTitle')}
            description={t('marketplaceDesc')}
          />
          
          <div className="feature-card group bg-gradient-to-br from-booking-primary to-booking-secondary text-white">
            <div className="mb-6 inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/20 text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3 text-white">{t('andMoreTitle')}</h3>
            <p className="text-white/90">{t('andMoreDesc')}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
