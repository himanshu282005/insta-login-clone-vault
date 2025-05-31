
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { Eye, EyeOff } from 'lucide-react';

interface LoginFormProps {
  isLogin: boolean;
}

const LoginForm = ({ isLogin }: LoginFormProps) => {
  const [email, setEmail] = useState('');
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
      if (isLogin) {
        const { error } = await supabase.auth.signInWithPassword({
          email,
          password,
        });
        
        if (error) {
          toast({
            title: "Login failed",
            description: error.message,
            variant: "destructive",
          });
        } else {
          toast({
            title: "Welcome back!",
            description: "You've been logged in successfully.",
          });
        }
      } else {
        const { error } = await supabase.auth.signUp({
          email,
          password,
          options: {
            emailRedirectTo: `${window.location.origin}/`,
            data: {
              username,
              full_name: fullName,
            }
          }
        });
        
        if (error) {
          toast({
            title: "Sign up failed",
            description: error.message,
            variant: "destructive",
          });
        } else {
          toast({
            title: "Account created!",
            description: "Please check your email to verify your account.",
          });
        }
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
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
              required
              className="w-full px-2 py-2 text-sm bg-gray-50 border border-gray-300 rounded-sm focus:border-gray-400 focus:bg-white"
            />
            <Input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="w-full px-2 py-2 text-sm bg-gray-50 border border-gray-300 rounded-sm focus:border-gray-400 focus:bg-white"
            />
          </>
        )}
        
        <Input
          type="email"
          placeholder="Phone number, username, or email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full px-2 py-2 text-sm bg-gray-50 border border-gray-300 rounded-sm focus:border-gray-400 focus:bg-white"
        />
        
        <div className="relative">
          <Input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
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
          {loading ? 'Loading...' : (isLogin ? 'Log in' : 'Sign up')}
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
