// app/edit-payment/page.js
import Image from "next/image";
import { FiCheck, FiUploadCloud, FiX, FiChevronDown, FiCalendar } from "react-icons/fi";

export default function EditPaymentPage() {
  return (
    <div className="min-h-screen bg-[#f5f7fb]">
      {/* hidden image just to use next/image without changing UI */}
      <Image
        src="/placeholder.png"
        alt=""
        width={1}
        height={1}
        className="hidden"
      />

      <div className="max-w-6xl mx-auto px-4 py-6 lg:py-8">
        {/* Top Bar */}
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between mb-6 lg:mb-8">
          <div>
            <h1 className="text-lg sm:text-xl font-semibold text-gray-900">
              Edit Payment
            </h1>
            <p className="text-xs sm:text-sm text-gray-500 mt-0.5">
              Payment ID: <span className="font-medium">PMT-001</span>
            </p>
          </div>

          <button className="inline-flex items-center gap-2 rounded-lg bg-[#2563eb] px-3.5 py-2 text-xs sm:text-sm font-medium text-white shadow-sm hover:bg-[#1d4ed8] transition">
            <FiCheck className="text-base" />
            <span>Saved Changes</span>
          </button>
        </div>

        {/* Main Grid */}
        <div className="grid gap-6 lg:grid-cols-[minmax(0,1.6fr)_minmax(0,1.2fr)]">
          {/* Left - Payment Information */}
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm">
            <div className="border-b border-gray-100 px-5 py-4">
              <h2 className="text-sm font-semibold text-gray-900">
                Payment Information
              </h2>
            </div>

            <div className="px-5 py-4 sm:py-5 space-y-4">
              {/* Payment ID */}
              <div className="space-y-1.5">
                <label className="block text-xs font-medium text-gray-600">
                  Payment ID
                </label>
                <input
                  type="text"
                  defaultValue="PMT-001"
                  className="w-full rounded-md border border-gray-200 bg-gray-50 px-3 py-2 text-sm text-gray-800 focus:border-[#2563eb] focus:ring-2 focus:ring-[#2563eb33] outline-none"
                  readOnly
                />
              </div>

              {/* Agent / Agency */}
              <div className="space-y-1.5">
                <label className="block text-xs font-medium text-gray-600">
                  Agent / Agency <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <select
                    defaultValue="Donna Cozart"
                    className="w-full appearance-none rounded-md border border-gray-200 bg-white px-3 py-2 text-sm text-gray-800 focus:border-[#2563eb] focus:ring-2 focus:ring-[#2563eb33] outline-none"
                  >
                    <option>Donna Cozart</option>
                  </select>
                  <FiChevronDown className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
                </div>
              </div>

              {/* Amount */}
              <div className="space-y-1.5">
                <label className="block text-xs font-medium text-gray-600">
                  Amount
                </label>
                <input
                  type="text"
                  defaultValue="$5200"
                  className="w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm text-gray-800 focus:border-[#2563eb] focus:ring-2 focus:ring-[#2563eb33] outline-none"
                />
              </div>

              {/* Payment Date */}
              <div className="space-y-1.5">
                <label className="block text-xs font-medium text-gray-600">
                  Payment Date <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <input
                    type="text"
                    defaultValue="09/30/2025"
                    className="w-full rounded-md border border-gray-200 bg-white px-3 py-2 pr-9 text-sm text-gray-800 focus:border-[#2563eb] focus:ring-2 focus:ring-[#2563eb33] outline-none"
                  />
                  <FiCalendar className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
                </div>
              </div>

              {/* Payment Method */}
              <div className="space-y-1.5">
                <label className="block text-xs font-medium text-gray-600">
                  Payment Method <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <select
                    defaultValue="Bank Transfer"
                    className="w-full appearance-none rounded-md border border-gray-200 bg-white px-3 py-2 text-sm text-gray-800 focus:border-[#2563eb] focus:ring-2 focus:ring-[#2563eb33] outline-none"
                  >
                    <option>Bank Transfer</option>
                  </select>
                  <FiChevronDown className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
                </div>
              </div>

              {/* Transaction ID */}
              <div className="space-y-1.5">
                <label className="block text-xs font-medium text-gray-600">
                  Transaction ID <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  defaultValue="TXN-845233"
                  className="w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm text-gray-800 focus:border-[#2563eb] focus:ring-2 focus:ring-[#2563eb33] outline-none"
                />
              </div>

              {/* Status */}
              <div className="space-y-1.5">
                <label className="block text-xs font-medium text-gray-600">
                  Status
                </label>
                <div className="relative">
                  <select
                    defaultValue="Paid"
                    className="w-full appearance-none rounded-md border border-gray-200 bg-white px-3 py-2 text-sm text-gray-800 focus:border-[#2563eb] focus:ring-2 focus:ring-[#2563eb33] outline-none"
                  >
                    <option>Paid</option>
                    <option>Pending</option>
                    <option>Failed</option>
                  </select>
                  <FiChevronDown className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
                </div>
              </div>

              {/* Reference Note */}
              <div className="space-y-1.5 pt-1">
                <label className="block text-xs font-medium text-gray-600">
                  Reference Note
                </label>
                <textarea
                  rows={3}
                  defaultValue="September commission batch"
                  className="w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm text-gray-800 focus:border-[#2563eb] focus:ring-2 focus:ring-[#2563eb33] outline-none resize-none"
                />
              </div>
            </div>
          </div>

          {/* Right - Summary + Quick Actions */}
          <div className="space-y-6">
            {/* Payment Summary */}
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm">
              <div className="border-b border-gray-100 px-5 py-4">
                <h2 className="text-sm font-semibold text-gray-900">
                  Payment Summary
                </h2>
              </div>

              <div className="px-5 py-4 sm:py-5 space-y-4 text-sm">
                <SummaryRow label="Payment ID" value="PMT-001" />
                <SummaryRow label="Agent" value="Donna Cozart" />
                <SummaryRow label="Amount" value="$5,200" />
                <SummaryRow label="Date" value="09/30/2025" />
                <SummaryRow label="Method" value="Bank Transfer" />

                <div className="flex items-center justify-between pt-1">
                  <span className="text-xs font-medium text-gray-500">
                    Status
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-[#e7f8ee] px-2.5 py-1 text-xs font-medium text-[#15803d]">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#22c55e]" />
                    Paid
                  </span>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm">
              <div className="border-b border-gray-100 px-5 py-4">
                <h2 className="text-sm font-semibold text-gray-900">
                  Quick Actions
                </h2>
              </div>

              <div className="px-5 py-4 sm:py-5 space-y-3">
                <button className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#2563eb] px-4 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-[#1d4ed8] transition">
                  <FiUploadCloud className="text-base" />
                  <span>Upload Payment</span>
                </button>

                <button className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-gray-100 px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-200 transition">
                  <FiX className="text-base" />
                  <span>Cancel</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* Small helper for summary rows */
function SummaryRow({ label, value }) {
  return (
    <div className="flex items-center justify-between">
      <span className="text-xs font-medium text-gray-500">{label}</span>
      <span className="text-sm font-medium text-gray-900">{value}</span>
    </div>
  );
}