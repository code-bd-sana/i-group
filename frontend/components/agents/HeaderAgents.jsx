"use client";

import { FiSearch } from "react-icons/fi";

export default function HeaderAgents() {
  return (
    <div>
      <h2 className="text-xl font-semibold">Agents / Accounts</h2>
      <p className="text-sm text-gray-500 mb-4">
        Manage all agents and sub-agencies
      </p>

      <div className="bg-white border rounded-xl p-4 flex flex-wrap gap-4 items-center">
        
        {/* Search */}
        <div className="flex items-center border rounded-lg px-4 py-2 bg-white w-72">
          <FiSearch className="text-gray-500 text-lg" />
          <input
            type="text"
            placeholder="Search by name, ID, email..."
            className="ml-2 text-sm outline-none w-full"
          />
        </div>

        {/* Status dropdown */}
        <select className="border rounded-lg px-4 py-2 text-sm w-40">
          <option>All Status</option>
          <option>Active</option>
          <option>Inactive</option>
        </select>

        {/* Add Agent */}
        <button className="ml-auto bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 flex items-center gap-1">
          + Add Agent
        </button>
      </div>
    </div>
  );
}
