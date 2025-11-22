"use client";

import Image from "next/image";
import Link from "next/link";
import {
  FiChevronLeft,
  FiMessageCircle,
  FiEdit2,
  FiEdit3,
} from "react-icons/fi";

export default function AgentDetails() {
  return (
    <div className="min-h-screen px-6 py-6">
      <div className=" text-black">
        {/* TOP BAR */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
         <Link href="/agents">
               <button className="w-9 h-9 rounded-full bg-white shadow-sm border border-gray-200 flex items-center justify-center hover:bg-gray-50">
              <FiChevronLeft className="text-gray-600 text-lg" />
            </button>
         </Link>

            <div className="flex justify-center items-center gap-2">
              <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-100">
                <Image
                  src="/profile.jpg"
                  width={64}
                  height={64}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>

              <div>
                <h1 className="text-[20px] font-semibold text-[#111827]">
                Donna Cozart
              </h1>
              <p className="text-[13px] text-gray-500">
                Agent · Cozart Insurance LLC
              </p>
              </div>
            </div>
          </div>

          {/* BUTTONS */}
          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 px-4 py-2 text-[13px] rounded-lg bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 shadow-sm">
              <FiMessageCircle className="text-[16px]" /> Message
            </button>

            <button className="flex items-center gap-2 px-4 py-2 text-[13px] rounded-lg bg-[#0A84FF] text-white hover:bg-[#066ad1] shadow-sm">
              <FiEdit2 className="text-[16px]" /> Edit Agent
            </button>
          </div>
        </div>

        {/* MAIN GRID — EXACT Figma */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* LEFT INFO CARD */}
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
            <h2 className="text-[15px] font-semibold text-gray-800 mb-4">
              Profile Information
            </h2>

            {/* Avatar + Name */}
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-100">
                <Image
                  src="/profile.jpg"
                  width={64}
                  height={64}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>

              <div>
                <p className="text-[16px] font-semibold text-[#111827]">
                  Donna Cozart
                </p>
                <p className="text-[13px] text-[#3B82F6] font-medium">AG001</p>
              </div>
            </div>

            {/* DETAILS GRID */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 text-[13px]">
              <Info label="Name" value="Donna Cozart" />
              <Info label="Email" value="donna@igroup.com" />

              <Info label="Phone" value="+1 555-432-2299" />
              <Info label="Company" value="Cozart Insurance LLC" />

              <Info label="Role" value="Agent" />
              <Info label="Address" value="221B Main St, Dallas, TX" />

              <Info label="Region" value="South Zone" />

              <div>
                <p className="text-gray-500 mb-1">Status</p>

                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E6F9EB]">
                  <span className="w-2 h-2 rounded-full bg-[#22C55E]" />
                  <span className="text-[12px] font-medium text-[#15803D]">
                    Active
                  </span>
                </div>
              </div>

              <Info label="Join Date" value="January 15, 2025" />
            </div>
          </div>

          {/* RIGHT SIDE CARDS */}
          <div className="flex flex-col gap-6">
            {/* PERFORMANCE SUMMARY */}
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
              <h2 className="text-[15px] font-semibold text-gray-800 mb-3">
                Performance Summary
              </h2>

              <table className="w-full text-left text-[13px]">
                <thead>
                  <tr className="text-black">
                    <th className="pb-2">Carrier/Company</th>
                    <th className="pb-2">Division</th>
                    <th className="pb-2 text-right">Bonus Level</th>
                  </tr>
                </thead>

                <tbody>
                  <TR company="AIG" division="Life" bonus="Gold" />
                  <TR company="BAN" division="Life" bonus="Silver" />
                  <TR
                    company="XYZ Insurance"
                    division="Health"
                    bonus="Platinum"
                  />
                </tbody>
              </table>
            </div>

            {/* INTERNAL NOTES */}
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
              <div className="flex items-center justify-between mb-3">
                <h2 className="text-[15px] font-semibold text-gray-800">
                  Internal Notes
                </h2>

                <button className="flex items-center gap-1 text-[13px] text-gray-600 hover:text-gray-800">
                  <FiEdit3 className="text-[15px]" /> Edit Notes
                </button>
              </div>

              <div className="bg-[#F3F4F6] rounded-lg px-4 py-3">
                <p className="text-[13px] text-gray-700 leading-normal">
                  Top performing agent with excellent client relationships.
                  Consistently meets monthly targets.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* SMALL COMPONENTS */
function Info({ label, value }) {
  return (
    <div>
      <p className="text-gray-500 mb-1">{label}</p>
      <p className="text-gray-900 font-medium">{value}</p>
    </div>
  );
}

function TR({ company, division, bonus }) {
  return (
    <tr className="border-t border-gray-100">
      <td className="py-2">{company}</td>
      <td className="py-2">{division}</td>
      <td className="py-2 text-right">{bonus}</td>
    </tr>
  );
}
