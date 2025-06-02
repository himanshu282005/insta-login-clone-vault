
import React from 'react';

interface AuthToggleProps {
  isLogin: boolean;
  onToggle: () => void;
}

const AuthToggle = ({ isLogin, onToggle }: AuthToggleProps) => {
  return (
    <div className="w-full border border-gray-600 rounded-xl px-6 py-6 text-center bg-gray-800/20">
      <p className="text-sm text-gray-300">
        {isLogin ? "Don't have an account? " : "Have an account? "}
        <button
          onClick={onToggle}
          className="text-blue-400 font-medium hover:underline"
        >
          {isLogin ? 'Create new account' : 'Log in'}
        </button>
      </p>
    </div>
  );
};

export default AuthToggle;
