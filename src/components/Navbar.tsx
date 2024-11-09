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
    <div className={cn("fixed left-0 top-0 h-full flex transition-all duration-300", 
      isCollapsed ? "w-[60px]" : "w-64"
    )}>
      <nav className="w-full bg-white p-4 relative">
        <div className={cn("mb-8 overflow-hidden", 
          isCollapsed ? "opacity-0" : "opacity-100 transition-opacity duration-200"
        )}>
          <h1 className="text-2xl font-bold text-primary">CRM System</h1>
        </div>
        
        <div className="space-y-2">
          <Link
            to="/"
            className={`flex items-center space-x-3 p-3 rounded-lg transition-colors ${
              isActive("/") ? "bg-gray-100 text-gray-900" : "hover:bg-gray-50"
            }`}
          >
            <LayoutDashboard className="h-5 w-5 flex-shrink-0" />
            <span className={cn("transition-opacity", 
              isCollapsed ? "opacity-0 hidden" : "opacity-100"
            )}>Dashboard</span>
          </Link>
          
          <Link
            to="/contacts"
            className={`flex items-center space-x-3 p-3 rounded-lg transition-colors ${
              isActive("/contacts") ? "bg-gray-100 text-gray-900" : "hover:bg-gray-50"
            }`}
          >
            <Users className="h-5 w-5 flex-shrink-0" />
            <span className={cn("transition-opacity", 
              isCollapsed ? "opacity-0 hidden" : "opacity-100"
            )}>Contacts</span>
          </Link>
          
          <Link
            to="/deals"
            className={`flex items-center space-x-3 p-3 rounded-lg transition-colors ${
              isActive("/deals") ? "bg-gray-100 text-gray-900" : "hover:bg-gray-50"
            }`}
          >
            <PieChart className="h-5 w-5 flex-shrink-0" />
            <span className={cn("transition-opacity", 
              isCollapsed ? "opacity-0 hidden" : "opacity-100"
            )}>Deals</span>
          </Link>
        </div>

        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="absolute -right-3 top-6 bg-white border rounded-full p-1.5 hover:bg-gray-50 z-50"
        >
          {isCollapsed ? (
            <ChevronRight className="h-4 w-4" />
          ) : (
            <ChevronLeft className="h-4 w-4" />
          )}
        </button>
      </nav>
      <Separator orientation="vertical" className="h-full" />
    </div>
  );
};

export default Navbar;