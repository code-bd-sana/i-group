"use client";

import { FiSearch } from "react-icons/fi";

export default function HeaderAgents() {
  return (
    <div className="pt-10">
      <h2 className="text-2xl font-semibold">Agents / Accounts</h2>
      <p className="text-sm text-gray-500 my-2 mb-6">
        Manage all agents and sub-agencies
      </p>

      <div className="border border-gray-300 rounded-xl p-4 flex flex-wrap gap-4 items-center">
        
        {/* Search */}
        <div className="flex items-center rounded-lg px-4 py-2 w-full sm:w-1/3 border border-gray-300">
          <FiSearch className="text-gray-500 text-lg" />
          <input
            type="text"
            placeholder="Search by name, ID, email..."
            className="ml-2 text-sm outline-none w-full"
          />
        </div>

        {/* Status dropdown */}
        <select className="rounded-lg px-4 py-2 text-sm w-full sm:w-1/3 border border-gray-300">
          <option>All Status</option>
          <option>Active</option>
          <option>Inactive</option>
        </select>

        {/* Add Agent */}
        <button className="w-full sm:w-auto bg-[#2199E8] text-white px-6 py-2 rounded-lg text-sm hover:bg-blue-700 flex items-center justify-center gap-1">
          + Add Agent
        </button>
      </div>
    </div>
  );
}
