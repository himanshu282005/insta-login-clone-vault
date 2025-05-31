
import React from 'react';
import { Instagram } from 'lucide-react';

const InstagramLogo = () => {
  return (
    <div className="text-center mb-8">
      <div className="inline-block p-2 rounded-lg bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600">
        <Instagram 
          size={48} 
          className="text-white"
        />
      </div>
    </div>
  );
};

export default InstagramLogo;
