
import React from 'react';
import { Instagram } from 'lucide-react';

const InstagramLogo = () => {
  return (
    <div className="text-center mb-8">
      <Instagram 
        size={64} 
        className="mx-auto text-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 bg-clip-text"
        style={{
          background: 'linear-gradient(45deg, #405DE6, #5851DB, #833AB4, #C13584, #E1306C, #FD1D1D, #F56040, #F77737, #FCAF45, #FFDC80)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text'
        }}
      />
    </div>
  );
};

export default InstagramLogo;
