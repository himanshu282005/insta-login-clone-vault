
import React from 'react';

const InstagramLogo = () => {
  return (
    <div className="text-center mb-12">
      <div className="inline-block">
        {/* Instagram official camera icon with gradient - matching mobile app */}
        <div className="w-20 h-20 mx-auto relative">
          <div 
            className="w-full h-full rounded-3xl flex items-center justify-center relative overflow-hidden shadow-lg"
            style={{
              background: 'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)'
            }}
          >
            {/* Camera body outline */}
            <div className="w-12 h-12 border-3 border-white rounded-full flex items-center justify-center relative">
              {/* Camera lens inner circle */}
              <div className="w-7 h-7 border-3 border-white rounded-full"></div>
            </div>
            {/* Camera flash dot - positioned like in official app */}
            <div className="absolute top-4 right-4 w-2.5 h-2.5 bg-white rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstagramLogo;
