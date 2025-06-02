
import React from 'react';

const InstagramLogo = () => {
  return (
    <div className="text-center mb-8">
      <div className="inline-block">
        <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 p-0.5">
          <div className="w-full h-full bg-gray-900 rounded-2xl flex items-center justify-center">
            <div className="w-10 h-10 border-2 border-white rounded-lg relative flex items-center justify-center">
              <div className="w-3 h-3 border-2 border-white rounded-full"></div>
              <div className="absolute top-1 right-1 w-1.5 h-1.5 bg-white rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstagramLogo;
