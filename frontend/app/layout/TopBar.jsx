import React from "react";
import { FiChevronDown } from "react-icons/fi";

export default function TopBar() {
  return (
    <div className="w-full bg-[#FFFFFF] shadow-[0px_4px_12px_0px_#0000001A] rounded-xl px-6 py-4 flex items-center justify-between">
      
      {/* Left - Title */}
      <h2 className="text-[#000000] text-2xl font-semibold">
        Dashboard
      </h2>

      {/* Right - Profile */}
      <div className="flex items-center gap-3">
        
        {/* Profile Image */}
        <img
          src="https://i.pravatar.cc/100"
          alt="profile"
          className="w-10 h-10 rounded-full object-cover"
        />

        {/* Name + Role */}
        <div className="flex flex-col leading-tight">
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
