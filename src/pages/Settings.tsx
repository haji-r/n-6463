
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import Navbar from "@/components/Navbar";
import { QrCode, Moon, Sun, UserRound } from "lucide-react";
import { useTheme } from "@/hooks/useTheme";
import { EditUserModal } from "@/components/EditUserModal";

interface SettingsProps {
  isCollapsed: boolean;
  setIsCollapsed: (value: boolean) => void;
}

const Settings = ({ isCollapsed, setIsCollapsed }: SettingsProps) => {
  const [isMFAEnabled, setIsMFAEnabled] = useState(false);
  const { theme, toggleTheme } = useTheme();
  
  // Mock user data
  const mockUser = {
    name: "John Doe",
    email: "john.doe@example.com",
    role: "Administrator",
    joinDate: "April 2024"
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 flex relative">
      <Navbar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
      <main 
        className={`flex-1 p-4 sm:p-8 transition-all duration-300 ${
          isCollapsed ? 'ml-[60px]' : 'ml-[60px] sm:ml-64'
        }`}
      >
        <div className="mb-8">
          <h1 className="text-3xl font-bold dark:text-white">Settings</h1>
          <p className="text-gray-600 dark:text-gray-400 mt-1">Manage your account settings and preferences</p>
        </div>

        <div className="max-w-2xl space-y-6">
          <Card className="p-6 dark:bg-gray-800">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center">
                  <UserRound className="w-8 h-8 text-gray-500 dark:text-gray-400" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold dark:text-white">{mockUser.name}</h2>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{mockUser.email}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                    {mockUser.role} • Joined {mockUser.joinDate}
                  </p>
                </div>
              </div>
              <EditUserModal user={{ name: mockUser.name, email: mockUser.email }} />
            </div>
          </Card>

          <Card className="p-6 dark:bg-gray-800">
            <h2 className="text-xl font-semibold mb-6 dark:text-white">Appearance</h2>
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium dark:text-white">Dark Mode</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">Switch between light and dark themes</p>
              </div>
              <div className="flex items-center space-x-2">
                {theme === 'dark' ? (
                  <Moon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                ) : (
                  <Sun className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                )}
                <Switch
                  checked={theme === 'dark'}
                  onCheckedChange={toggleTheme}
                />
              </div>
            </div>
          </Card>

          <Card className="p-6 dark:bg-gray-800">
            <h2 className="text-xl font-semibold mb-6 dark:text-white">Security Settings</h2>
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium dark:text-white">Two-Factor Authentication (2FA)</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Add an extra layer of security to your account</p>
                </div>
                <Switch
                  checked={isMFAEnabled}
                  onCheckedChange={setIsMFAEnabled}
                />
              </div>

              {isMFAEnabled && (
                <div className="border dark:border-gray-700 rounded-lg p-6 bg-gray-50 dark:bg-gray-700">
                  <h4 className="font-medium mb-4 dark:text-white">Setup 2FA</h4>
                  <div className="flex items-center justify-center bg-white dark:bg-gray-800 p-8 rounded-lg border dark:border-gray-600 mb-4">
                    <div className="w-48 h-48 flex items-center justify-center border-2 border-dashed rounded-lg dark:border-gray-600">
                      <QrCode className="w-32 h-32 text-gray-400 dark:text-gray-500" />
                    </div>
                  </div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                    Scan this QR code with your authenticator app to enable 2FA
                  </p>
                </div>
              )}
            </div>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Settings;
