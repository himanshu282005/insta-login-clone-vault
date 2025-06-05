
import React from 'react';

const InstagramLogo = () => {
  return (
    <div className="text-center mb-8">
      <div className="inline-block">
        {/* Instagram square camera icon with gradient */}
        <div className="w-20 h-20 mx-auto relative">
          <div 
            className="w-full h-full rounded-3xl flex items-center justify-center relative overflow-hidden"
            style={{
              background: 'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)'
            }}
          >
            {/* Camera icon */}
            <svg 
              className="w-12 h-12 text-white" 
              fill="currentColor" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
              strokeWidth="0"
            >
              {/* Outer circle (camera body) */}
              <circle cx="12" cy="12" r="8" fill="none" stroke="currentColor" strokeWidth="1.5"/>
              {/* Inner circle (lens) */}
              <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="1.5"/>
              {/* Flash dot */}
              <circle cx="16.5" cy="7.5" r="1.2" fill="currentColor"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstagramLogo;
