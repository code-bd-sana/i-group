"use client";

import { useState } from "react";
import {
  FiCalendar,
  FiChevronDown,
  FiUploadCloud,
} from "react-icons/fi";

export default function AuditLogs() {
  const logs = [
    {
      date: "Oct 5, 2025",
      user: "Donna Cozart",
      role: "Agent",
      module: "Payment",
      action: "View",
      desc: "Payment ID: PNT-001",
      ip: "192.168.0.12",
    },
    {
      date: "Oct 5, 2025",
      user: "Admin",
      role: "Admin",
      module: "Settings",
      action: "Update",
      desc: "Updated FAQ: Step 1",
      ip: "192.168.0.12",
    },
    {
      date: "Oct 5, 2025",
      user: "Frank Wang",
      role: "Agent",
      module: "Statements",
      action: "Upload",
      desc: "Removed old bonus",
      ip: "192.168.0.12",
    },
    {
      date: "Oct 5, 2025",
      user: "Assistant",
      role: "Agent",
      module: "Bonus Level",
      action: "Delete",
      desc: "User logs removed",
      ip: "192.168.0.12",
    },
    {
      date: "Oct 4, 2025",
      user: "Sarah Johnson",
      role: "Assistant Admin",
      module: "Carriers",
      action: "View",
      desc: "Clicked: Carrier 101",
      ip: "192.168.0.12",
    },
    {
      date: "Oct 4, 2025",
      user: "Mark Stevens",
      role: "Agent",
      module: "Edit",
      action: "Download",
      desc: "Downloaded new report",
      ip: "192.168.0.12",
    },
    {
      date: "Oct 3, 2025",
      user: "Admin",
      role: "Admin",
      module: "Audit Logs",
      action: "Add",
      desc: "Updated carrier info",
      ip: "192.168.0.12",
    },
    {
      date: "Oct 2, 2025",
      user: "Robert Wilson",
      role: "Agent",
      module: "Edit",
      action: "Edit",
      desc: "Accessed September file",
      ip: "192.168.0.12",
    },
  ];

  return (
    <div className="min-h-screen px-6 py-6">
      <div className="">

        {/* HEADER */}
        <div>
          <h1 className="text-[18px] font-semibold text-[#111827]">
            Audit Logs / Activity History
          </h1>
          <p className="text-[13px] text-gray-500 mt-1">
            Track all user actions and system activities in real-time.
          </p>
        </div>

        {/* TOP RIGHT BUTTONS */}
        <div className="flex justify-end gap-3 mt-3">
          <TopBlueButton label="Choose File" />
        
        </div>

        {/* FILTER CARD */}
        <div className="bg-white rounded-xl border font-medium border-gray-200 shadow-sm p-5 mt-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4">

            {/* Date From */}
            <FilterInput label="Date From">
              <input
                type="text"
                placeholder="mm/dd/yyyy"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-[13px]"
              />
              <FiCalendar className="absolute right-3 top-3 text-gray-400 text-[16px]" />
            </FilterInput>

            {/* Date To */}
            <FilterInput label="Date To">
              <input
                type="text"
                placeholder="mm/dd/yyyy"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-[13px]"
              />
              <FiCalendar className="absolute right-3 top-3 text-gray-400 text-[16px]" />
            </FilterInput>

            {/* User / Role */}
            <FilterInput label="User / Role">
              <select className="w-full px-3 py-2 border border-gray-300 rounded-lg text-[13px] appearance-none">
                <option>All Users</option>
              </select>
              <FiChevronDown className="absolute right-3 top-3 text-gray-400 text-[16px]" />
            </FilterInput>

            {/* Module */}
            <FilterInput label="Module">
              <select className="w-full px-3 py-2 border border-gray-300 rounded-lg text-[13px] appearance-none">
                <option>All Modules</option>
              </select>
              <FiChevronDown className="absolute right-3 top-3 text-gray-400 text-[16px]" />
            </FilterInput>

            {/* Action */}
            <FilterInput label="Action Type">
              <select className="w-full px-3 py-2 border border-gray-300 rounded-lg text-[13px] appearance-none">
                <option>All Actions</option>
              </select>
              <FiChevronDown className="absolute right-3 top-3 text-gray-400 text-[16px]" />
            </FilterInput>

            {/* Search */}
            <FilterInput label="Search">
              <input
                type="text"
                placeholder="Search logs..."
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-[13px]"
              />
            </FilterInput>
          </div>

          {/* FILTER BUTTONS */}
          <div className="flex items-center gap-3 mt-5">
            <button className="px-4 py-2 bg-[#2199E8] text-white rounded-lg text-[13px] shadow-sm hover:bg-[#1a86c7]">
              Apply Filters
            </button>
            <button className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-[13px] shadow-sm hover:bg-gray-100">
              Reset Filters
            </button>
          </div>
        </div>

        {/* TABLE */}
 
<div className="bg-white rounded-xl border border-gray-200 shadow-sm mt-5 overflow-x-auto">
  <table className="w-full text-left border-collapse min-w-[900px]">
    
    {/* HEADER */}
    <thead>
      <tr className="bg-[#F7FAFD] text-[12px] font-medium text-gray-600 border-b border-gray-200">
        <th className="px-5 py-3">DATE</th>
        <th className="px-5 py-3">USER</th>
        <th className="px-5 py-3">ROLE</th>
        <th className="px-5 py-3">MODULE</th>
        <th className="px-5 py-3">ACTION</th>
        <th className="px-5 py-3">DESCRIPTION</th>
        <th className="px-5 py-3 text-right">IP / DEVICE</th>
        <th className="px-5 py-3 text-right">ACTIONS</th>
      </tr>
    </thead>

    {/* BODY */}
    <tbody>
      {logs.map((item, i) => (
        <tr
          key={i}
          className="text-[13px] text-gray-700 border-b border-gray-100 hover:bg-gray-50"
        >
          <td className="px-5 py-3">{item.date}</td>
          <td className="px-5 py-3">{item.user}</td>
          <td className="px-5 py-3">{item.role}</td>
          <td className="px-5 py-3">{item.module}</td>

          {/* Action Blue Link */}
          <td className="px-5 py-3 text-[#2199E8] font-medium cursor-pointer hover:underline">
            {item.action}
          </td>

          <td className="px-5 py-3 truncate">{item.desc}</td>

          <td className="px-5 py-3 text-right">{item.ip}</td>

          {/* View More */}
          <td className="px-5 py-3 text-right">
            <button className="text-[#2199E8] font-medium hover:underline text-[13px]">
              View More
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>



        {/* PAGINATION */}
        <div className="flex items-center justify-between mt-4 text-[13px] text-gray-500">
          <p>Showing 1–8 of 8 logs</p>

          <div className="flex items-center gap-2">
            <button className="px-2 py-1 text-gray-500 hover:text-gray-800">
              ‹ Previous
            </button>

            <button className="w-7 h-7 bg-[#2199E8] text-white rounded-md text-[12px]">
              1
            </button>

            <button className="w-7 h-7 bg-white border border-gray-300 rounded-md text-[12px]">
              2
            </button>

            <button className="w-7 h-7 bg-white border border-gray-300 rounded-md text-[12px]">
              3
            </button>

            <button className="px-2 py-1 text-gray-500 hover:text-gray-800">
              Next ›
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* COMPONENTS */
/* -------------------------------------------------------------------------- */

function TopBlueButton({ label }) {
  return (
    <button className="flex items-center gap-2 px-4 py-2 bg-[#E2E8F0]  rounded-lg text-[13px] shadow-sm">
      <FiUploadCloud className="text-[16px]" />
      {label}
    </button>
  );
}

function FilterInput({ label, children }) {
  return (
    <div>
      <p className="text-[13px] text-gray-600 mb-1">{label}</p>
      <div className="relative">{children}</div>
    </div>
  );
}
