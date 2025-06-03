
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
              background: 'linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)'
            }}
          >
            {/* Camera circle outline */}
            <div className="w-9 h-9 border-2 border-white rounded-full flex items-center justify-center">
              {/* Camera lens inner circle */}
              <div className="w-5 h-5 border-2 border-white rounded-full"></div>
            </div>
            {/* Camera flash dot */}
            <div className="absolute top-3 right-3 w-2 h-2 bg-white rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstagramLogo;
