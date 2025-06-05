
import React from 'react';

const InstagramLogo = () => {
  return (
    <div className="text-center mb-8">
      <div className="inline-block">
        {/* Instagram official camera icon with gradient */}
        <div className="w-16 h-16 mx-auto relative">
          <div 
            className="w-full h-full rounded-2xl flex items-center justify-center relative overflow-hidden"
            style={{
              background: 'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)'
            }}
          >
            {/* Camera icon */}
            <svg 
              className="w-8 h-8 text-white" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              {/* Camera body */}
              <rect x="3" y="6" width="18" height="12" rx="2" ry="2" strokeWidth="2" fill="none"/>
              {/* Camera lens */}
              <circle cx="12" cy="12" r="3" strokeWidth="2" fill="none"/>
              {/* Flash */}
              <circle cx="16.5" cy="8.5" r="1" fill="currentColor" stroke="none"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstagramLogo;
