
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import Navbar from "@/components/Navbar";
import { QrCode } from "lucide-react";

interface SettingsProps {
  isCollapsed: boolean;
  setIsCollapsed: (value: boolean) => void;
}

const Settings = ({ isCollapsed, setIsCollapsed }: SettingsProps) => {
  const [isMFAEnabled, setIsMFAEnabled] = useState(false);

  return (
    <div className="min-h-screen bg-white flex relative">
      <Navbar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
      <main 
        className={`flex-1 p-4 sm:p-8 transition-all duration-300 ${
          isCollapsed ? 'ml-[60px]' : 'ml-[60px] sm:ml-64'
        }`}
      >
        <div className="mb-8">
          <h1 className="text-3xl font-bold">Settings</h1>
          <p className="text-gray-600 mt-1">Manage your account settings and preferences</p>
        </div>

        <div className="max-w-2xl">
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-6">Security Settings</h2>
            
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium">Two-Factor Authentication (2FA)</h3>
                  <p className="text-sm text-gray-500">Add an extra layer of security to your account</p>
                </div>
                <Switch
                  checked={isMFAEnabled}
                  onCheckedChange={setIsMFAEnabled}
                />
              </div>

              {isMFAEnabled && (
                <div className="border rounded-lg p-6 bg-gray-50">
                  <h4 className="font-medium mb-4">Setup 2FA</h4>
                  <div className="flex items-center justify-center bg-white p-8 rounded-lg border mb-4">
                    <div className="w-48 h-48 flex items-center justify-center border-2 border-dashed rounded-lg">
                      <QrCode className="w-32 h-32 text-gray-400" />
                    </div>
                  </div>
                  <p className="text-sm text-gray-500 text-center">
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
