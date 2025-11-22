import { FiDownload, FiPlus } from "react-icons/fi";
import Link from "next/link";

export default function CarriersHeader() {
  return (
    <div className="flex flex-col gap-1 pt-8 pb-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold text-[#1A1A1A]">Carriers</h2>

        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-gray-200 border border-gray-200 rounded-lg text-sm hover:bg-gray-50">
            <FiDownload className="text-[16px]" />
            Export List
          </button>

          <Link
            href="/carriers/add-carrier"
            className="flex items-center gap-2 px-4 py-3 bg-[#2199E8] text-white rounded-lg text-sm shadow-sm hover:bg-[#0F5FD7]"
          >
            <FiPlus className="text-[16px]" />
            Add New Carrier
          </Link>
        </div>
      </div>

      <p className="text-sm text-gray-500">
        Manage and organize insurance carrier data
      </p>
    </div>
  );
}
