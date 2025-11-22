"use client";

import AgentRow from "./AgentRow";
import Pagination from "./Pagination";


export default function AgentsTable() {
  const agents = [
    {
      name: "Donna Cozart",
      id: "AG001",
      email: "donna@jgroup.com",
      phone: "+1 555-432-2299",
      status: "Active",
      role: "Agent",
      date: "Jan 15, 2025",
      avatar: "/avatars/donna.png",
    },
    {
      name: "Jane Smith",
      id: "AG003",
      email: "jane@jgroup.com",
      phone: "+1 555-432-2299",
      status: "Inactive",
      role: "Sub-Agency",
      date: "Jan 15, 2025",
      avatar: "/avatars/jane.png",
    },
  ];

  return (
    <div className="bg-white rounded-xl border shadow-sm p-6">
      <table className="w-full text-left">
        <thead>
          <tr className="text-xs text-gray-500 border-b">
            <th className="py-2">AGENT</th>
            <th className="py-2">EMAIL</th>
            <th className="py-2">STATUS</th>
            <th className="py-2">ROLE</th>
            <th className="py-2">CREATED ON</th>
            <th className="py-2">ACTIONS</th>
          </tr>
        </thead>

        <tbody>
          {agents.map((item, i) => (
            <AgentRow key={i} data={item} />
          ))}
        </tbody>
      </table>

      <Pagination showing="1-5 of 5 agents" />
    </div>
  );
}
