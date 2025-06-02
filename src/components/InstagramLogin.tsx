
import React, { useState } from 'react';
import InstagramLogo from './auth/InstagramLogo';
import LoginForm from './auth/LoginForm';
import AuthToggle from './auth/AuthToggle';

const InstagramLogin = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center px-4 relative">
      {/* Language selector */}
      <div className="absolute top-16 left-1/2 transform -translate-x-1/2">
        <div className="flex items-center text-gray-400 text-sm">
          <span>English (UK)</span>
          <svg className="w-4 h-4 ml-2" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </div>
      </div>

      <div className="w-full max-w-sm">
        <InstagramLogo />
        <LoginForm isLogin={isLogin} />
        
        {/* Switch between Login/Signup */}
        <div className="mt-8 text-center">
          <AuthToggle 
            isLogin={isLogin} 
            onToggle={() => setIsLogin(!isLogin)} 
          />
        </div>

        {/* Meta branding */}
        <div className="text-center mt-16">
          <div className="flex items-center justify-center text-gray-500 text-sm font-medium">
            <span className="mr-2">∞</span>
            <span>Meta</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstagramLogin;
