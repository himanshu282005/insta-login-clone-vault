
import React from 'react';

const InstagramLogo = () => {
  return (
    <div className="text-center mb-8">
      <div className="inline-block">
        {/* Instagram official text logo */}
        <h1 
          className="text-5xl font-normal text-white select-none"
          style={{
            fontFamily: 'Billabong, cursive',
            fontSize: '52px',
            lineHeight: '1',
            letterSpacing: '-0.5px'
          }}
        >
          Instagram
        </h1>
      </div>
    </div>
  );
};

export default InstagramLogo;
