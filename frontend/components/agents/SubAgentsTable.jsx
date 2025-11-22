"use client";

import AgentRow from "./AgentRow";
import Pagination from "./Pagination";

export default function SubAgentsTable() {
  const agents = [
    {
      name: "Frank Wang",
      email: "frank@jgroup.com",
      status: "Active",
      role: "Sub-Agency",
      date: "Feb 30, 2025",
      avatar: "/agents/agent.png",
    },
    {
      name: "Sarah Lopez",
      email: "sarah@jgroup.com",
      status: "Active",
      role: "Agent",
      date: "Mar 03, 2025",
      avatar: "/agents/agent.png",
    },
    {
      name: "Sarah Lopez",
      email: "sarah@jgroup.com",
      status: "Active",
      role: "Agent",
      date: "Mar 03, 2025",
      avatar: "/agents/agent.png",
    },
    {
      name: "Sarah Lopez",
      email: "sarah@jgroup.com",
      status: "Active",
      role: "Agent",
      date: "Mar 03, 2025",
      avatar: "/agents/agent.png",
    },
  ];

  return (
    <div className="my-10">
      <h2 className="text-2xl font-semibold mb-4">
        Sub-Agents of Donna Cozart
      </h2>
      <div className="bg-white rounded-xl  shadow-sm p-6">
        <table className="w-full text-left">
          <thead>
            <tr className="text-xs text-gray-500">
              <th className="py-2">NAME</th>
              <th className="py-2">EMAIL</th>
              <th className="py-2">STATUS</th>
              <th className="py-2">ROLE</th>
              <th className="py-2">CREATED ON</th>
              <th className="py-2">ACTIONS</th>
            </tr>
          </thead>

          <tbody>
            {agents.map((a, i) => (
              <AgentRow key={i} data={a} />
            ))}
          </tbody>
        </table>

        <Pagination showing="1-6 of 6 sub-accounts" />
      </div>
    </div>
  );
}
