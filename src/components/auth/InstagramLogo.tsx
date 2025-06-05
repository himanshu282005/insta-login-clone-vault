
import React from 'react';

const InstagramLogo = () => {
  return (
    <div className="text-center mb-8">
      <div className="inline-block">
        {/* Official Instagram text logo */}
        <h1 
          className="text-4xl font-normal text-white tracking-tight"
          style={{
            fontFamily: 'Billabong, cursive',
            fontWeight: 'normal',
            letterSpacing: '0.05em'
          }}
        >
          Instagram
        </h1>
      </div>
    </div>
  );
};

export default InstagramLogo;
