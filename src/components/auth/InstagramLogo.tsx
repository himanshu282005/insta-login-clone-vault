
import React from 'react';

const InstagramLogo = () => {
  return (
    <div className="text-center mb-8">
      <div className="inline-block">
        {/* Instagram official logo style */}
        <div 
          className="text-white text-[52px] font-normal tracking-wide leading-none" 
          style={{ 
            fontFamily: '"Billabong", "Brush Script MT", cursive',
            fontWeight: '400',
            letterSpacing: '1px'
          }}
        >
          Instagram
        </div>
      </div>
    </div>
  );
};

export default InstagramLogo;
