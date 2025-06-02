
import React from 'react';

const InstagramLogo = () => {
  return (
    <div className="text-center mb-12">
      <div className="inline-block">
        <div className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600 p-1">
          <div className="w-full h-full bg-gray-900 rounded-2xl flex items-center justify-center">
            <div className="w-12 h-12 border-3 border-white rounded-lg relative">
              <div className="absolute top-2 right-2 w-2 h-2 bg-white rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstagramLogo;
