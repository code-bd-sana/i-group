import { FiSearch, FiChevronDown } from "react-icons/fi";

export default function CarriersFilters() {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 mb-6">

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">

        {/* Search */}
        <div className="relative">
          <FiSearch className="absolute top-3 left-3 text-gray-400" />
          <input
            type="text"
            className="w-full pl-10 pr-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:ring-0 focus:border-[#1677FF]"
            placeholder="Search by carrier name or code"
          />
        </div>

        {/* End Date */}
        <div className="relative">
          <button className="flex items-center justify-between w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm bg-white">
            All Status
            <FiChevronDown />
          </button>
        </div>

        {/* Sort By */}
        <div className="relative">
          <button className="flex items-center justify-between w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm bg-white">
            Default
            <FiChevronDown />
          </button>
        </div>

        {/* Buttons */}
        <div className="flex items-center gap-3">
          <button className="flex-1 py-2.5 px-3 bg-[#EF4444] text-white rounded-lg text-sm hover:bg-[#e75454]">
            Apply filter
          </button>
          <button className="flex-1 py-2.5 bg-gray-100 text-sm rounded-lg hover:bg-gray-200">
            Reset
          </button>
        </div>

      </div>
    </div>
  );
}