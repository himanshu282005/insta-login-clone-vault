
import React, { useState } from 'react';
import InstagramLogo from './auth/InstagramLogo';
import LoginForm from './auth/LoginForm';
import AuthToggle from './auth/AuthToggle';
import AppDownloadSection from './auth/AppDownloadSection';

const InstagramLogin = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="max-w-sm w-full">
        {/* Main Login/Signup Card */}
        <div className="bg-white border border-gray-300 px-10 py-8 mb-4">
          <InstagramLogo />
          <LoginForm isLogin={isLogin} />
        </div>

        {/* Switch between Login/Signup */}
        <AuthToggle 
          isLogin={isLogin} 
          onToggle={() => setIsLogin(!isLogin)} 
        />

        {/* Get the App */}
        <AppDownloadSection />
      </div>
    </div>
  );
};

export default InstagramLogin;
