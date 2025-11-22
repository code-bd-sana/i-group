"use client";

import { FiChevronLeft, FiSearch, FiFileText, FiEye, FiDownload } from "react-icons/fi";

export default function AgentStatements() {
  const rows = [
    {
      id: "ID (ST-001)",
      date: "SEP 30, 2025",
      file: "Jan_Statements.csv",
      total: "$5,200",
    },
    {
      id: "ID (ST-001)",
      date: "SEP 30, 2025",
      file: "Aug_Statement.pdf",
      total: "$5,200",
    },
    {
      id: "ID (ST-001)",
      date: "SEP 30, 2025",
      file: "Jan_Statements.csv",
      total: "$5,200",
    },
    {
      id: "ID (ST-001)",
      date: "SEP 30, 2025",
      file: "Aug_Statement.pdf",
      total: "$5,200",
    },
    {
      id: "ID (ST-001)",
      date: "SEP 30, 2025",
      file: "Jan_Statements.csv",
      total: "$5,200",
    },
  ];

  return (
    <div className="w-full px-6 py-6 min-h-screen">
      <div className="">
        {/* HEADER */}
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-3">
            <button className="w-9 h-9 rounded-full bg-white shadow-sm border border-gray-200 flex items-center justify-center hover:bg-gray-50">
              <FiChevronLeft className="text-gray-600 text-lg" />
            </button>

            <div>
              <h1 className="text-[18px] font-semibold text-[#111827]">
                Donna Cozart
              </h1>
              <p className="text-[13px] text-gray-500">
                You are viewing all statements for the agent
              </p>
            </div>
          </div>

          <button className="flex items-center gap-2 px-4 py-2 bg-[#0A84FF] text-white text-[13px] font-medium rounded-lg hover:bg-[#066ad1] shadow-sm">
            + Add Statement
          </button>
        </div>

        {/* SEARCH + FILTERS */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-5 mb-5">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-3">
            {/* Search bar */}
            <div className="w-full lg:w-[40%] relative">
              <FiSearch className="absolute left-3 top-3 text-gray-400 text-[18px]" />
              <input
                type="text"
                placeholder="Search by file name or ID..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-[14px] focus:ring-1 focus:ring-blue-500 outline-none"
              />
            </div>

            {/* Dropdowns */}
            <div className="flex items-center gap-3 w-full lg:w-auto">
              <select className="px-4 py-2 border border-gray-300 rounded-lg bg-white text-[14px]">
                <option>All Status</option>
              </select>

              <select className="px-4 py-2 border border-gray-300 rounded-lg bg-white text-[14px]">
                <option>All Dates</option>
              </select>
            </div>
          </div>
        </div>

        {/* TABLE */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-5">
          <table className="w-full text-left text-[14px]">
            <thead>
              <tr className="text-gray-500 text-[13px] border-b border-gray-200">
                <th className="pb-3">STATEMENT ID</th>
                <th className="pb-3">DATE</th>
                <th className="pb-3">LIFE OF BUSINESS</th>
                <th className="pb-3">TOTAL</th>
                <th className="pb-3 text-right">ACTIONS</th>
              </tr>
            </thead>

            <tbody>
              {rows.map((row, index) => (
                <tr
                  key={index}
                  className="border-b border-gray-100 hover:bg-gray-50 transition"
                >
                  <td className="py-3">{row.id}</td>
                  <td className="py-3">{row.date}</td>

                  {/* FILE with red PDF icon */}
                  <td className="py-3 flex items-center gap-2 text-blue-600 font-medium">
                    <FiFileText className="text-red-500 text-[18px]" />
                    {row.file}
                  </td>

                  <td className="py-3">{row.total}</td>

                  {/* ACTIONS */}
                  <td className="py-3 text-right">
                    <div className="flex items-center justify-end gap-3">
                      {/* DETAILS BUTTON */}
                      <button className="flex items-center gap-2 px-3 py-1.5 border border-gray-300 text-gray-700 rounded-lg text-[13px] bg-white hover:bg-gray-100 transition">
                        <FiEye className="text-[15px] text-gray-600" />
                        Details
                      </button>

                      {/* DOWNLOAD BUTTON */}
                      <button className="flex items-center gap-2 px-3 py-1.5 text-blue-600 rounded-lg text-[13px] bg-[#E8F1FF] border border-[#A5C8FF] hover:bg-[#dce9ff] transition">
                        <FiDownload className="text-[16px] text-blue-600" />
                        Download
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
