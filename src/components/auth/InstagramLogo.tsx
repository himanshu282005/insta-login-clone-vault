
import React from 'react';

const InstagramLogo = () => {
  return (
    <div className="text-center mb-8">
      <div className="inline-block">
        {/* Instagram logo image */}
        <div className="w-16 h-16 mx-auto relative rounded-full overflow-hidden border-2 border-gray-300">
          <img 
            src="/lovable-uploads/c6781daf-720b-4469-8662-a4740ca8fd17.png" 
            alt="Instagram" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default InstagramLogo;
