
import React from 'react';
import { Button } from '@/components/ui/button';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

interface DashboardProps {
  user: any;
}

const Dashboard = ({ user }: DashboardProps) => {
  const { toast } = useToast();

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      toast({
        title: "Error",
        description: "Failed to log out",
        variant: "destructive",
      });
    } else {
      toast({
        title: "Logged out",
        description: "You have been logged out successfully",
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-sm border p-8">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 bg-clip-text text-transparent">
              Instagram Dashboard
            </h1>
            <Button 
              onClick={handleLogout}
              variant="outline"
              className="text-gray-600 hover:text-gray-800"
            >
              Log out
            </Button>
          </div>
          
          <div className="space-y-6">
            <div className="border-b pb-6">
              <h2 className="text-xl font-semibold mb-4">Welcome back!</h2>
              <p className="text-gray-600">
                You're successfully logged in to your Instagram-style application.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 border rounded-lg">
                <h3 className="font-semibold mb-2">User Information</h3>
                <div className="text-sm text-gray-600 space-y-1">
                  <p><strong>Email:</strong> {user?.email}</p>
                  <p><strong>User ID:</strong> {user?.id}</p>
                  <p><strong>Created:</strong> {new Date(user?.created_at).toLocaleDateString()}</p>
                </div>
              </div>
              
              <div className="p-6 border rounded-lg">
                <h3 className="font-semibold mb-2">Account Status</h3>
                <div className="text-sm text-gray-600 space-y-1">
                  <p><strong>Email Verified:</strong> {user?.email_confirmed_at ? 'Yes' : 'No'}</p>
                  <p><strong>Last Sign In:</strong> {new Date(user?.last_sign_in_at).toLocaleDateString()}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
