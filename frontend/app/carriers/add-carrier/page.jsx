"use client";
import Image from "next/image";
import Link from "next/link";
import { FaSave } from "react-icons/fa";
import { FiUploadCloud } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";

export default function AddCarrier() {
  return (
    <div className="w-full min-h-screen bg-[#F6F7F9] p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-semibold text-[#111]">
            Add New Carriers
          </h2>
          <p className="text-gray-600">Create a new insurance carrier</p>
        </div>

        <div className="flex gap-3">
          <Link href="/carriers" className="px-5 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-100">
            Cancel
          </Link>

          <button className="px-5 py-2 rounded-lg bg-[#2199E8] text-white hover:bg-[#0062cc] shadow-sm flex items-center gap-2">
            <FaSave />
            Save Carriers
          </button>
        </div>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Section */}
        <div className="bg-white rounded-xl p-6 shadow-sm lg:col-span-2">
          <h3 className="text-[15px] font-semibold text-[#333] mb-4">
            Carrier Information
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Input label="Carrier Name *" placeholder="Enter carrier name" />
            <Input label="Carrier Code *" placeholder="Enter carrier code" />

            <Input
              label="Contact Person *"
              placeholder="Enter contact person name"
            />
            <Input label="Email *" placeholder="Enter email address" />

            <Input label="Phone *" placeholder="Enter phone number" />
            <Input label="Website" placeholder="Enter website URL" />

            <div className="sm:col-span-2">
              <Input label="Address" placeholder="Enter full address" />
            </div>

            {/* Status Dropdown */}
            <div className="sm:col-span-2">
              <label className="text-[13px] text-gray-600 mb-1 block">
                Status
              </label>

              <div className="relative">
                <select className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm appearance-none">
                  <option>Active</option>
                  <option>Inactive</option>
                </select>

                <IoIosArrowDown className="absolute right-3 top-3 text-gray-500" />
              </div>

              <span className="inline-block mt-2 bg-[#D1FBD9] text-[#2ABA51] text-[12px] px-2 py-1 rounded-md">
                ✓ Active
              </span>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex flex-col gap-6">
          {/* Notes */}
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <h3 className="text-[15px] font-semibold text-[#333] mb-3">
              Notes & Comments
            </h3>

            <textarea
              rows={5}
              className="w-full border border-gray-300 rounded-lg p-3 text-sm resize-none"
              placeholder="Add internal notes or comments about this carrier..."
            ></textarea>
          </div>

          {/* Logo Upload */}
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <h3 className="text-[15px] font-semibold text-[#333] mb-4">
              Carrier Logo
            </h3>

            <div className="flex items-center gap-4">
              {/* Drop Zone */}
              <div className="border border-dashed border-gray-400 rounded-xl w-[150px] h-[150px] flex flex-col items-center justify-center text-gray-500 text-sm">
                <FiUploadCloud size={28} className="mb-2" />
                150x150px
              </div>

              <div className="flex flex-col">
                <label
                  htmlFor="upload"
                  className="px-4 py-2 bg-white border border-gray-400 rounded-lg text-sm cursor-pointer hover:bg-gray-100 flex items-center gap-2"
                >
                  <FiUploadCloud size={18} />
                  Upload Logo
                </label>
                <input id="upload" type="file" className="hidden" />

                <p className="text-xs text-gray-500 mt-2 w-[200px]">
                  Drag and drop an image or click to browse.
                  <br />
                  Recommended size: <b>150×150px</b>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* Reusable Input Component */
function Input({ label, placeholder }) {
  return (
    <div>
      <label className="text-[13px] text-gray-600 mb-1 block">{label}</label>
      <input
        type="text"
        placeholder={placeholder}
        className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm"
      />
    </div>
  );
}
