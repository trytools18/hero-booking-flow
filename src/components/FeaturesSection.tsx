
import React from 'react';
import FeatureCard from './FeatureCard';
import { Calendar, Users, BellRing, BarChart3, Globe } from 'lucide-react';

const FeaturesSection: React.FC = () => {
  return (
    <section id="features" className="py-20 features-gradient">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="section-title">Powerful Features to Grow Your Business</h2>
          <p className="section-subtitle">Everything you need to streamline operations and delight your customers</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 staggered-fade-in">
          <FeatureCard 
            icon={Calendar}
            title="Online Booking & Payments"
            description="Let clients book 24/7 with automated confirmations and secure payment processing. Never miss a booking opportunity again."
          />
          
          <FeatureCard 
            icon={Users}
            title="Customer Relationship Management"
            description="Track customer preferences, history, and loyalty. Build stronger relationships with personalized service."
          />
          
          <FeatureCard 
            icon={BellRing}
            title="Automated Reminders & Follow-Ups"
            description="Reduce no-shows and keep customers engaged with smart notifications and timely follow-ups."
          />
          
          <FeatureCard 
            icon={BarChart3}
            title="Performance Analytics Dashboard"
            description="Gain insights into revenue, bookings, and customer trends. Make data-driven decisions to optimize your business."
          />
          
          <FeatureCard 
            icon={Globe}
            title="Marketplace for Growth"
            description="Attract new clients through Booking Hero's network and expand your customer base effortlessly."
          />
          
          <div className="feature-card group bg-gradient-to-br from-booking-primary to-booking-secondary text-white">
            <div className="mb-6 inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/20 text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3 text-white">And Much More</h3>
            <p className="text-white/90">Staff management, inventory tracking, mobile app, and integrations with your favorite tools.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
