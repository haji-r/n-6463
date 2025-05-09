
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import Navbar from "@/components/Navbar";
import { QrCode, UserRound } from "lucide-react";
import { EditUserModal } from "@/components/EditUserModal";
import { ThemeToggle } from "@/components/ThemeToggle";
import { useTheme } from "@/components/ThemeProvider";

interface SettingsProps {
  isCollapsed: boolean;
  setIsCollapsed: (value: boolean) => void;
}

const Settings = ({ isCollapsed, setIsCollapsed }: SettingsProps) => {
  const [isMFAEnabled, setIsMFAEnabled] = useState(false);
  const { theme, setTheme } = useTheme();
  
  // Mock user data
  const mockUser = {
    name: "John Doe",
    email: "john.doe@example.com",
    role: "Administrator",
    joinDate: "April 2024"
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex relative">
      <Navbar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
      <main 
        className={`flex-1 p-4 sm:p-8 transition-all duration-300 ${
          isCollapsed ? 'ml-[60px]' : 'ml-[60px] sm:ml-64'
        }`}
      >
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">Settings</h1>
            <p className="text-muted-foreground mt-1">Manage your account settings and preferences</p>
          </div>
          <ThemeToggle />
        </div>

        <div className="max-w-2xl space-y-6">
          <Card className="p-6 bg-card text-card-foreground">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center">
                  <UserRound className="w-8 h-8 text-muted-foreground" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold">{mockUser.name}</h2>
                  <p className="text-sm text-muted-foreground">{mockUser.email}</p>
                  <p className="text-xs text-muted-foreground mt-1">
                    {mockUser.role} • Joined {mockUser.joinDate}
                  </p>
                </div>
              </div>
              <EditUserModal user={{ name: mockUser.name, email: mockUser.email }} />
            </div>
          </Card>

          <Card className="p-6 bg-card text-card-foreground">
            <h2 className="text-xl font-semibold mb-6">Appearance</h2>
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium">Theme</h3>
                <p className="text-sm text-muted-foreground">Customize the look of the application</p>
              </div>
              <div>
                <ThemeToggle />
              </div>
            </div>
          </Card>

          <Card className="p-6 bg-card text-card-foreground">
            <h2 className="text-xl font-semibold mb-6">Security Settings</h2>
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium">Two-Factor Authentication (2FA)</h3>
                  <p className="text-sm text-muted-foreground">Add an extra layer of security to your account</p>
                </div>
                <Switch
                  checked={isMFAEnabled}
                  onCheckedChange={setIsMFAEnabled}
                />
              </div>

              {isMFAEnabled && (
                <div className="border border-border rounded-lg p-6 bg-muted">
                  <h4 className="font-medium mb-4">Setup 2FA</h4>
                  <div className="flex items-center justify-center bg-card p-8 rounded-lg border border-border mb-4">
                    <div className="w-48 h-48 flex items-center justify-center border-2 border-dashed rounded-lg border-border">
                      <QrCode className="w-32 h-32 text-muted-foreground" />
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground text-center">
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
