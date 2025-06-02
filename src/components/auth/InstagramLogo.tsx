
import React from 'react';

const InstagramLogo = () => {
  return (
    <div className="text-center mb-12">
      <div className="inline-block">
        <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 p-1">
          <div className="w-full h-full bg-black rounded-xl flex items-center justify-center">
            <div className="w-11 h-11 border-2 border-white rounded-lg relative flex items-center justify-center">
              <div className="w-3.5 h-3.5 border-2 border-white rounded-full"></div>
              <div className="absolute top-2.5 right-2.5 w-1.5 h-1.5 bg-white rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstagramLogo;
