
import React from 'react';

const InstagramLogo = () => {
  return (
    <div className="text-center mb-8">
      <div className="inline-block">
        {/* Instagram square camera icon with gradient */}
        <div className="w-16 h-16 mx-auto relative">
          <div 
            className="w-full h-full rounded-2xl flex items-center justify-center relative overflow-hidden"
            style={{
              background: 'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)'
            }}
          >
            {/* Camera icon */}
            <svg 
              className="w-10 h-10 text-white" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
              strokeWidth="1.5"
            >
              {/* Outer square (camera body) */}
              <rect x="4" y="4" width="16" height="16" rx="3" ry="3" fill="none" stroke="currentColor"/>
              {/* Inner circle (lens) - increased radius from 4 to 5.5 */}
              <circle cx="12" cy="12" r="5.5" fill="none" stroke="currentColor"/>
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
