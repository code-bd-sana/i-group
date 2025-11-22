"use client";

import Link from "next/link";
import { FiChevronDown, FiFileText } from "react-icons/fi";

export default function ReportCenter() {
  const rows = [
    { type: "Statement", date: "Oct 01, 2025", format: "PDF" },
    { type: "Payment", date: "Sep 01, 2025", format: "Excel" },
    { type: "Bonus", date: "Jun 01, 2025", format: "PDF" },
    { type: "Activity", date: "Aug 01, 2025", format: "CSV" },
    { type: "Payment", date: "Oct 01, 2025", format: "PDF" },
  ];

  const badge = {
    PDF: "bg-[#E6F0FF] text-[#0A84FF] border border-[#A7C4FF]",
    Excel: "bg-[#16A34A20] text-[#15803D] border border-[#15803D40]",
    CSV: "bg-[#0EA5E920] text-[#0EA5E9] border border-[#0EA5E940]",
  };

  return (
    <div className="px-6 py-6 min-h-screen">
      <div className="">
        {/* HEADER */}
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-[20px] font-semibold text-[#111827]">
              Report Center
            </h1>
            <p className="text-[13px] text-gray-500 mt-1">
              Generate and download reports for statements, payments, bonuses,
              and activity logs.
            </p>
          </div>

          <button className="px-5 py-2 bg-[#E2E8F0]  rounded-lg text-[14px] text-[#475569] shadow-sm">
            Cancel
          </button>
        </div>

        {/* FILTERS CARD */}
        <div className="bg-white p-5 rounded-xl font-medium border border-gray-200 shadow-sm mb-6">
          <h2 className="text-[15px] font-semibold mb-4">Report Filters</h2>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
            {/* Report Type */}
            <div>
              <label className="text-[13px] text-gray-600">Report Type</label>
              <div className="relative mt-1">
                <select className="w-full appearance-none px-4 py-2 border border-gray-300 rounded-lg text-[14px]">
                  <option>Select Report Type</option>
                </select>
                <FiChevronDown className="absolute right-3 top-3 text-gray-400" />
              </div>
            </div>

            {/* Select Agent */}
            <div>
              <label className="text-[13px] text-gray-600">
                Select Agent / Agency
              </label>
              <div className="relative mt-1">
                <select className="w-full appearance-none px-4 py-2 border border-gray-300 rounded-lg text-[14px]">
                  <option>All Agents</option>
                </select>
                <FiChevronDown className="absolute right-3 top-3 text-gray-400" />
              </div>
            </div>

            {/* Format */}
            <div>
              <label className="text-[13px] text-gray-600">Report Format</label>
              <div className="relative mt-1">
                <select className="w-full appearance-none px-4 py-2 border border-gray-300 rounded-lg text-[14px]">
                  <option>PDF</option>
                </select>
                <FiChevronDown className="absolute right-3 top-3 text-gray-400" />
              </div>
            </div>

            {/* Button */}
            <div className="flex items-end">
              <button className="w-full flex items-center justify-center gap-2 px-5 py-2 bg-[#2199E8] text-white rounded-[8px] text-[14px] font-medium hover:bg-[#1e8bd2] transition shadow-sm">
                <FiFileText className="text-white text-[18px]" />
                Generate Report
              </button>
            </div>
          </div>
        </div>

        {/* TABLE CARD */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-0">
          {/* TABLE HEADER */}
          <div className="bg-[#F7FAFD] px-5 py-3 rounded-t-xl border-b border-gray-200 text-[13px] font-medium text-gray-600 grid grid-cols-4">
            <div>TYPE</div>
            <div>DATE GENERATOR</div>
            <div>FORMAT</div>
            <div>ACTION</div>
          </div>

          {/* TABLE BODY */}
          <div className="">
            {rows.map((row, i) => (
              <div
                key={i}
                className="grid grid-cols-4 px-5 py-3 text-[14px] border-b border-gray-100 hover:bg-gray-50"
              >
                <div>{row.type}</div>

                <div>{row.date}</div>

                {/* FORMAT BADGE */}
                <div>
                  <span
                    className={`px-3 py-1 rounded-full text-[12px] font-medium ${
                      badge[row.format]
                    }`}
                  >
                    {row.format}
                  </span>
                </div>

                {/* ACTIONS */}
                <div className="flex items-center font-medium gap-4 text-[13px]">
                <Link href="/report-result">
                    <button className="text-[#2199E8] hover:underline">
                    Info
                  </button>
                </Link>
                  <button className="text-[#475569] hover:underline">
                    Download
                  </button>
                  <button className="text-[#EF4444] hover:underline">
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* FOOTER */}
          <div className="flex items-center justify-between px-5 py-3 text-[13px] text-gray-600">
            <div>Showing 1–6 of 8 Reports</div>

            {/* PAGINATION */}
            <div className="flex items-center gap-3">
              <button className="text-blue-600 hover:underline">
                Previous
              </button>

              <div className="flex items-center gap-2">
                <button className="px-3 py-1 rounded-lg bg-[#0A84FF] text-white text-[13px]">
                  1
                </button>
                <button className="px-3 py-1 rounded-lg bg-white border border-gray-300 text-[13px]">
                  2
                </button>
                <button className="px-3 py-1 rounded-lg bg-white border border-gray-300 text-[13px]">
                  3
                </button>
              </div>

              <button className="text-blue-600 hover:underline">Next</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
