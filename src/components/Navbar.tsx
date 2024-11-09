import { Link, useLocation } from "react-router-dom";
import { LayoutDashboard, Users, PieChart } from "lucide-react";

const Navbar = () => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <nav className="fixed left-0 top-0 h-full w-64 bg-white shadow-lg p-4">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-primary">CRM System</h1>
      </div>
      
      <div className="space-y-2">
        <Link
          to="/"
          className={`flex items-center space-x-3 p-3 rounded-lg transition-colors ${
            isActive("/") ? "bg-primary text-white" : "hover:bg-gray-100"
          }`}
        >
          <LayoutDashboard className="h-5 w-5" />
          <span>Dashboard</span>
        </Link>
        
        <Link
          to="/contacts"
          className={`flex items-center space-x-3 p-3 rounded-lg transition-colors ${
            isActive("/contacts") ? "bg-primary text-white" : "hover:bg-gray-100"
          }`}
        >
          <Users className="h-5 w-5" />
          <span>Contacts</span>
        </Link>
        
        <Link
          to="/deals"
          className={`flex items-center space-x-3 p-3 rounded-lg transition-colors ${
            isActive("/deals") ? "bg-primary text-white" : "hover:bg-gray-100"
          }`}
        >
          <PieChart className="h-5 w-5" />
          <span>Deals</span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;