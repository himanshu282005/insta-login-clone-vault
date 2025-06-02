
import React from 'react';

const InstagramLogo = () => {
  return (
    <div className="text-center mb-8">
      <div className="inline-block">
        <div className="w-20 h-20 mx-auto mb-6 rounded-3xl bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 p-0.5">
          <div className="w-full h-full bg-gray-900 rounded-3xl flex items-center justify-center">
            <div className="w-12 h-12 border-3 border-white rounded-xl relative flex items-center justify-center">
              <div className="w-4 h-4 border-3 border-white rounded-full"></div>
              <div className="absolute top-2 right-2 w-2 h-2 bg-white rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstagramLogo;
