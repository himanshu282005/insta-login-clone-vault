import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { Eye, EyeOff, Instagram } from 'lucide-react';

const InstagramLogin = () => {
  const [isLogin, setIsLogin] = useState(true);
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
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="max-w-sm w-full">
        {/* Main Login/Signup Card */}
        <div className="bg-white border border-gray-300 px-10 py-8 mb-4">
          {/* Instagram Logo */}
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
        </div>

        {/* Switch between Login/Signup */}
        <div className="bg-white border border-gray-300 px-10 py-6 text-center">
          <p className="text-sm">
            {isLogin ? "Don't have an account? " : "Have an account? "}
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="text-blue-500 font-semibold hover:underline"
            >
              {isLogin ? 'Sign up' : 'Log in'}
            </button>
          </p>
        </div>

        {/* Get the App */}
        <div className="text-center mt-6">
          <p className="text-sm mb-4">Get the app.</p>
          <div className="flex justify-center space-x-2">
            <img
              src="https://static.cdninstagram.com/rsrc.php/v3/yt/r/Yfc020c87j0.png"
              alt="Download on the App Store"
              className="h-10"
            />
            <img
              src="https://static.cdninstagram.com/rsrc.php/v3/yz/r/c5Rp7Ym-Klz.png"
              alt="Get it on Google Play"
              className="h-10"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstagramLogin;
