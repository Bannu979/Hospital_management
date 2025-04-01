import React from 'react';
import { Building2, LayoutDashboard, LogOut, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { FaHospital } from "react-icons/fa";
const Sidebar = ({ onClose }) => {
  const location = useLocation();
  
  return (
    <div className="h-screen w-65 bg-white border-r border-gray-200 flex flex-col shadow-lg">
      <div className="p-4 border-b border-gray-200 bg-green-500">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            {/* <Building2 className="text-white" size={24} /> */}
            {/* <span className="text-xl font-bold text-white">Apollo</span> */}
            <a href="/" className="text-3xl font-bold text-white flex items-center space-x-2">
            <FaHospital size={24} />
                <span className='text-md '>MediCare</span>
            </a>
            <span className="text-xs bg-white text-green-500 px-2 py-0.5 rounded-full ml-0">SuperAdmin</span>
          </div>
          <button onClick={onClose} className="lg:hidden text-white hover:text-gray-200">
            <X size={24} />
          </button>
        </div>
      </div>
      
      <nav className="flex-1 p-4 overflow-y-auto">
        <ul className="space-y-2">
          <li>
            <Link
              to="/admin/dashboard"
              onClick={onClose}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                location.pathname === '/admin/dashboard'
                  ? 'bg-emerald-50 text-emerald-600'
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              <LayoutDashboard size={20} />
              <span className="font-medium">Dashboard</span>
            </Link>
          </li>
          <li>
            <Link
              to="/admin/hospitals"
              onClick={onClose}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                location.pathname === '/admin/hospitals'
                  ? 'bg-emerald-50 text-emerald-600'
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              <Building2 size={20} />
              <span className="font-medium">Hospitals</span>
            </Link>
          </li>
        </ul>
      </nav>
      
      <div className="p-4 border-t border-gray-200">
        <button className="flex items-center gap-2 text-gray-600 hover:text-gray-800 w-full px-4 py-3 rounded-lg hover:bg-gray-50 transition-colors">
          <LogOut size={20} />
          <span className="font-medium">Logout</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;