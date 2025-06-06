
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
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
              strokeWidth="1.5"
            >
              {/* Outer square (camera body) */}
              <rect x="4" y="4" width="16" height="16" rx="3" ry="3" fill="none" stroke="currentColor"/>
              {/* Inner square (lens) */}
              <rect x="8" y="8" width="8" height="8" rx="1" ry="1" fill="none" stroke="currentColor"/>
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
