import { Link, useLocation } from "react-router-dom";
import { LayoutDashboard, Users, PieChart } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const Navbar = () => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <div className="fixed left-0 top-0 h-full flex">
      <nav className="w-64 bg-white p-4">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-primary">CRM System</h1>
        </div>
        
        <div className="space-y-2">
          <Link
            to="/"
            className={`flex items-center space-x-3 p-3 rounded-lg transition-colors ${
              isActive("/") ? "bg-gray-100 text-gray-900" : "hover:bg-gray-50"
            }`}
          >
            <LayoutDashboard className="h-5 w-5" />
            <span>Dashboard</span>
          </Link>
          
          <Link
            to="/contacts"
            className={`flex items-center space-x-3 p-3 rounded-lg transition-colors ${
              isActive("/contacts") ? "bg-gray-100 text-gray-900" : "hover:bg-gray-50"
            }`}
          >
            <Users className="h-5 w-5" />
            <span>Contacts</span>
          </Link>
          
          <Link
            to="/deals"
            className={`flex items-center space-x-3 p-3 rounded-lg transition-colors ${
              isActive("/deals") ? "bg-gray-100 text-gray-900" : "hover:bg-gray-50"
            }`}
          >
            <PieChart className="h-5 w-5" />
            <span>Deals</span>
          </Link>
        </div>
      </nav>
      <Separator orientation="vertical" className="h-full" />
    </div>
  );
};

export default Navbar;