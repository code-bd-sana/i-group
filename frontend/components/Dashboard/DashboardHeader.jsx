import { FiUploadCloud } from "react-icons/fi";
import { HiOutlineDocumentText } from "react-icons/hi";
import { HiUserGroup } from "react-icons/hi2";
import { BsCreditCard2Front } from "react-icons/bs";

export default function DashboardHeader() {
  return (
    <div className="w-full mt-10">
      {/* Top Bar */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-[22px] font-semibold text-[#0D1726]">
            Welcome back, Alamin
          </h2>
          <p className="text-sm text-gray-500 mt-1">
            Here&apos;s what’s happening with your iGroup portal today.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2 text-[#475569]  rounded-lg bg-[#E2E8F0] text-sm font-medium">
            <FiUploadCloud className="text-[18px]" />
            Upload Payments
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-[#2199E8] text-white rounded-lg text-sm font-medium]">
            <FiUploadCloud className="text-[18px]" />
            Upload Adjustments
          </button>
        </div>
      </div>

      {/* Stats Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Card 1 */}
        <div className="bg-white shadow-sm rounded-xl p-5 border border-gray-100">
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm text-gray-600 font-medium">
              Total Statements
            </span>
            <div className="p-2 bg-[#E8F2FF] rounded-lg">
              <HiOutlineDocumentText className="text-[#0A84FF] text-[22px]" />
            </div>
          </div>

          <h2 className="text-[28px] font-semibold text-[#0D1726]">1,245</h2>

          <div className="flex items-center gap-2 mt-1">
            <span className="text-green-600 text-sm font-semibold">↑ 12.5%</span>
            <span className="text-gray-400 text-sm">vs last month</span>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white shadow-sm rounded-xl p-5 border border-gray-100">
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm text-gray-600 font-medium">
              Active Agents
            </span>
            <div className="p-2 bg-[#E8F9F0] rounded-lg">
              <HiUserGroup className="text-[#1CBF66] text-[22px]" />
            </div>
          </div>

          <h2 className="text-[28px] font-semibold text-[#0D1726]">325</h2>

          <div className="flex items-center gap-2 mt-1">
            <span className="text-green-600 text-sm font-semibold">↑ 5%</span>
            <span className="text-gray-400 text-sm">vs last month</span>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-white shadow-sm rounded-xl p-5 border border-gray-100">
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm text-gray-600 font-medium">
              Payments Processed
            </span>
            <div className="p-2 bg-[#FFEFEF] rounded-lg">
              <BsCreditCard2Front className="text-[#E75A5A] text-[22px]" />
            </div>
          </div>

          <h2 className="text-[28px] font-semibold text-[#0D1726]">
            $128,900
          </h2>

          <div className="flex items-center gap-2 mt-1">
            <span className="text-green-600 text-sm font-semibold">↑ 18%</span>
            <span className="text-gray-400 text-sm">vs last month</span>
          </div>
        </div>
      </div>
    </div>
  );
}
