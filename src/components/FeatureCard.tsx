
import React from 'react';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon: Icon, title, description }) => {
  return (
    <div className="feature-card group">
      <div className="mb-6 inline-flex items-center justify-center w-12 h-12 rounded-full bg-booking-light text-booking-primary group-hover:bg-booking-primary group-hover:text-white transition-all">
        <Icon size={24} />
      </div>
      <h3 className="text-xl font-bold mb-3 text-booking-dark group-hover:text-booking-primary transition-colors">{title}</h3>
      <p className="text-booking-gray">{description}</p>
    </div>
  );
};

export default FeatureCard;
