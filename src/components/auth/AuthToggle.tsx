
import React from 'react';

interface AuthToggleProps {
  isLogin: boolean;
  onToggle: () => void;
}

const AuthToggle = ({ isLogin, onToggle }: AuthToggleProps) => {
  return (
    <div className="bg-white border border-gray-300 px-10 py-6 text-center">
      <p className="text-sm">
        {isLogin ? "Don't have an account? " : "Have an account? "}
        <button
          onClick={onToggle}
          className="text-blue-500 font-semibold hover:underline"
        >
          {isLogin ? 'Sign up' : 'Log in'}
        </button>
      </p>
    </div>
  );
};

export default AuthToggle;
