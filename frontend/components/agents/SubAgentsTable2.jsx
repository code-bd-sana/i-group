"use client";

import Image from "next/image";
import Link from "next/link";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";

export default function SubAgentsTable2() {
  const data = [
    {
      name: "Frank Wang",
      email: "frank@igroup.com",
      role: "Sub-Agency",
      status: "Active",
      date: "Feb 30, 2025",
      initials: "FW",
    },
    {
      name: "Sarah Lopez",
      email: "sarah@igroup.com",
      role: "Agent",
      status: "Active",
      date: "Mar 03, 2025",
      initials: "SW",
    },
    {
      name: "Michael Chen",
      email: "michael@igroup.com",
      role: "Agent",
      status: "Active",
      date: "Feb 30, 2025",
      initials: "FW",
    },
  ];

  return (
    <div className="py-10">
      <h2 className="text-xl font-semibold mb-4">Sub-Agents of Donna Cozart</h2>
      <div className="w-full bg-white rounded-xl p-6 border border-gray-200">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="text-left text-gray-500 text-sm border-b border-gray-200">
                <th className="py-3 px-4 font-medium">NAME</th>
                <th className="py-3 px-4 font-medium">EMAIL</th>
                <th className="py-3 px-4 font-medium">ROLE</th>
                <th className="py-3 px-4 font-medium">STATUS</th>
                <th className="py-3 px-4 font-medium">CREATED ON</th>
                <th className="py-3 px-4 font-medium">ACTIONS</th>
              </tr>
            </thead>

            <tbody>
              {data.map((item, index) => (
                <tr
                  key={index}
                  className="border-b border-gray-100 hover:bg-gray-50 transition"
                >
                  <td className="py-4 px-4 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-sm font-semibold text-blue-700">
                      {item.initials}
                    </div>
                    <span className="font-medium">{item.name}</span>
                  </td>

                  <td className="py-4 px-4 text-gray-600">{item.email}</td>

                  <td className="py-4 px-4 text-gray-600">{item.role}</td>

                  <td className="py-4 px-4">
                    <span className="flex items-center gap-1 bg-green-100 text-green-700 text-xs font-medium px-3 py-1 rounded-full w-fit">
                      <svg
                        width="12"
                        height="12"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      Active
                    </span>
                  </td>

                  <td className="py-4 px-4 text-gray-600">{item.date}</td>

                  <td className="py-4 px-4 flex items-center gap-4">
                    <Link href="/agents/agent-details" className="text-blue-600 hover:underline">
                      Edit
                    </Link>
                    <button className="text-red-600 hover:underline">
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-between mt-4 text-sm text-gray-600">
          <p>Showing 1–6 of 6 sub-accounts</p>

          <div className="flex items-center gap-4">
            <button className="flex items-center gap-1 text-gray-500 hover:text-gray-800">
              <span>&lt;</span> Previous
            </button>
            <button className="flex items-center gap-1 text-gray-500 hover:text-gray-800">
              Next <span>&gt;</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
