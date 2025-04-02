
import React from 'react';

interface TestimonialCardProps {
  quote: string;
  author: string;
  position: string;
  companyName: string;
  rating: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  quote,
  author,
  position,
  companyName,
  rating
}) => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
      {/* Star Rating */}
      <div className="flex mb-4">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
      
      {/* Quote */}
      <p className="mb-4 text-booking-gray italic">"{quote}"</p>
      
      {/* Author Info */}
      <div className="flex items-center">
        <div className="w-10 h-10 bg-booking-light rounded-full flex items-center justify-center text-booking-primary font-bold">
          {author.charAt(0)}
        </div>
        <div className="ml-3">
          <h4 className="font-bold text-booking-dark">{author}</h4>
          <p className="text-sm text-booking-gray">{position}, {companyName}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
