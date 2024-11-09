import { Link, useLocation } from "react-router-dom";
import { LayoutDashboard, Users, PieChart, ChevronLeft, ChevronRight } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { useState } from "react";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const location = useLocation();
  const [isCollapsed, setIsCollapsed] = useState(false);
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <div className={cn(
      "fixed left-0 top-0 h-full flex transition-all duration-300",
      isCollapsed ? "w-16" : "w-64"
    )}>
      <nav className="bg-white p-4 flex flex-col w-full relative">
        <div className="mb-8 flex items-center justify-between">
          {!isCollapsed && <h1 className="text-2xl font-bold text-primary">CRM</h1>}
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            {isCollapsed ? (
              <ChevronRight className="h-5 w-5" />
            ) : (
              <ChevronLeft className="h-5 w-5" />
            )}
          </button>
        </div>
        
        <div className="space-y-2">
          <Link
            to="/"
            className={`flex items-center ${isCollapsed ? 'justify-center' : 'space-x-3'} p-3 rounded-lg transition-colors ${
              isActive("/") ? "bg-gray-100 text-gray-900" : "hover:bg-gray-50"
            }`}
          >
            <LayoutDashboard className="h-5 w-5" />
            {!isCollapsed && <span>Dashboard</span>}
          </Link>
          
          <Link
            to="/contacts"
            className={`flex items-center ${isCollapsed ? 'justify-center' : 'space-x-3'} p-3 rounded-lg transition-colors ${
              isActive("/contacts") ? "bg-gray-100 text-gray-900" : "hover:bg-gray-50"
            }`}
          >
            <Users className="h-5 w-5" />
            {!isCollapsed && <span>Contacts</span>}
          </Link>
          
          <Link
            to="/deals"
            className={`flex items-center ${isCollapsed ? 'justify-center' : 'space-x-3'} p-3 rounded-lg transition-colors ${
              isActive("/deals") ? "bg-gray-100 text-gray-900" : "hover:bg-gray-50"
            }`}
          >
            <PieChart className="h-5 w-5" />
            {!isCollapsed && <span>Deals</span>}
          </Link>
        </div>
      </nav>
      <Separator orientation="vertical" className="h-full" />
    </div>
  );
};

export default Navbar;