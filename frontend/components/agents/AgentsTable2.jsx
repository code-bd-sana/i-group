"use client";

import Image from "next/image";
import Link from "next/link";

export default function AgentsTable2() {
  const agents = [
    {
      name: "Donna Cozart",
      code: "AG001",
      email: "donna@igroup.com",
      phone: "+1 555-432-2299",
      avatar: "/agents/agent.png",
      status: "Active",
      role: "Agent",
      date: "Jan 15, 2025",
    },
    {
      name: "John Doe",
      code: "AG002",
      email: "donna@igroup.com",
      phone: "+1 555-432-2299",
      avatar: "/agents/agent.png",
      status: "Active",
      role: "Agent",
      date: "Jan 15, 2025",
    },
    {
      name: "Jane Smith",
      code: "AG003",
      email: "janes@igroup.com",
      phone: "+1 555-432-2299",
      avatar: "/agents/agent.png",
      status: "Inactive",
      role: "Sub-Agency",
      date: "Jan 15, 2025",
    },
    {
      name: "Robert Johnson",
      code: "AG004",
      email: "robert@igroup.com",
      phone: "+1 555-432-2299",
      avatar: "/agents/agent.png",
      status: "Active",
      role: "Agent",
      date: "Jan 15, 2025",
    },
  ];

  return (
    <div className="w-full my-10 bg-white rounded-xl border border-gray-200 shadow-sm p-4 md:p-6">
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          {/* HEADER */}
          <thead>
            <tr className="text-sm text-gray-500 border-b border-gray-200">
              <th className="py-3 px-4">AGENT</th>
              <th className="py-3 px-4">EMAIL</th>
              <th className="py-3 px-4">STATUS</th>
              <th className="py-3 px-4">ROLE</th>
              <th className="py-3 px-4">CREATED ON</th>
              <th className="py-3 px-4">ACTIONS</th>
            </tr>
          </thead>

          {/* BODY */}
          <tbody>
            {agents.map((item, index) => (
              <tr
                key={index}
                className="border-b border-gray-100 text-sm text-gray-700 hover:bg-gray-50"
              >
                {/* AGENT */}
                <td className="py-4 px-4 whitespace-nowrap">
                  <div className="flex items-center gap-3">
                    <Image
                      src={item.avatar}
                      width={40}
                      height={40}
                      alt="avatar"
                      className="rounded-full"
                    />
                    <div>
                      <p className="font-semibold">{item.name}</p>
                      <p className="text-gray-500 text-xs">{item.code}</p>
                    </div>
                  </div>
                </td>

                {/* EMAIL */}
                <td className="py-4 px-4 whitespace-nowrap">
                  <p>{item.email}</p>
                  <p className="text-gray-500 text-xs">{item.phone}</p>
                </td>

                {/* STATUS */}
                <td className="py-4 px-4 whitespace-nowrap">
                  {item.status === "Active" ? (
                    <span className="text-green-600 text-xs flex items-center gap-1 bg-green-100 px-3 py-1 rounded-full w-fit">
                      ✔ Active
                    </span>
                  ) : (
                    <span className="text-red-600 text-xs flex items-center gap-1 bg-red-100 px-3 py-1 rounded-full w-fit">
                      ✖ Inactive
                    </span>
                  )}
                </td>

                {/* ROLE */}
                <td className="py-4 px-4 whitespace-nowrap">{item.role}</td>

                {/* DATE */}
                <td className="py-4 px-4 whitespace-nowrap">{item.date}</td>

                {/* ACTIONS */}
                <td className="py-4 px-4 whitespace-nowrap">
                  <div className="flex items-center gap-4">
                    <Link href="/agents/agent-details" className="text-blue-600 hover:underline text-sm">
                      Edit
                    </Link>
                    <button className="text-red-600 hover:underline text-sm">
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* FOOTER */}
      <div className="flex justify-between items-center text-sm text-gray-600 mt-4 px-2">
        <p>Showing 1–5 of 5 agents</p>

        <div className="flex items-center gap-6">
          <button className="flex items-center gap-1 text-gray-600 hover:text-gray-900">
            <span>‹</span> Previous
          </button>
          <button className="flex items-center gap-1 text-gray-600 hover:text-gray-900">
            Next <span>›</span>
          </button>
        </div>
      </div>
    </div>
  );
}
