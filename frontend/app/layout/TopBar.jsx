import React from "react";
import { FiChevronDown } from "react-icons/fi";

export default function TopBar({ onMenuToggle, sidebarOpen }) {
  return (
    <div className="w-full bg-[#FFFFFF]  top-0 left-0 shadow-[0px_4px_12px_0px_#0000001A] rounded-xl px-6 py-4 flex items-center justify-between">
      
      {/* Left Side - Hamburger Menu + Title */}
      <div className="flex items-center gap-4">
        {/* Hamburger Menu Button for Mobile */}
        <button 
          className="lg:hidden p-2 rounded-md hover:bg-gray-100 transition-colors"
          onClick={onMenuToggle}
          aria-label="Toggle menu"
        >
          <div className="w-6 h-6 flex flex-col justify-center space-y-1">
            <span className={`block h-0.5 w-6 bg-gray-600 transition-all ${sidebarOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
            <span className={`block h-0.5 w-6 bg-gray-600 transition-all ${sidebarOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block h-0.5 w-6 bg-gray-600 transition-all ${sidebarOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
          </div>
        </button>
        
        {/* Title */}
        <h2 className="text-[#000000] text-2xl font-semibold">
          Dashboard
        </h2>
      </div>

      {/* Right - Profile */}
      <div className="flex items-center gap-3">
        
        {/* Profile Image */}
        <img
          src="https://i.pravatar.cc/100"
          alt="profile"
          className="w-10 h-10 rounded-full object-cover"
        />

        {/* Name + Role */}
        <div className="hidden sm:flex flex-col leading-tight">
          <span className="text-sm font-semibold text-[#000000]">
            Alamin Khan
          </span>
          <span className="text-xs text-gray-500 -mt-1">
            Admin
          </span>
        </div>

        {/* Arrow */}
        <FiChevronDown size={18} className="text-gray-600" />
      </div>
    </div>
  );
}