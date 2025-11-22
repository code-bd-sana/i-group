import { FiEdit2, FiTrash2, FiDownload, FiMail, FiPrinter } from "react-icons/fi";

export default function PaymentDetails() {
  return (
    <div className="w-full rounded-xl  ">

      {/* Header */}
 <div className="flex items-center justify-between  rounded-md  px-6 py-4">
  <h2 className="text-2xl font-semibold  text-gray-700">


<span>    Payment Details</span>
     <br /> <span className="text-[#475569] text-sm">Payment ID: PMT -001</span>
  </h2>


  <div className="flex items-center gap-3">
    <button className="flex items-center gap-2 rounded-md bg-[#2199E8] px-4 py-2 text-sm font-medium text-white ]">
      <FiEdit2 size={14} />
      Edit Payment
    </button>

    <button className="flex items-center gap-2 rounded-md border border-red-300 px-4 py-2 text-sm font-medium text-red-600 hover:bg-red-50">
      <FiTrash2 size={14} />
      Delete
    </button>
  </div>
</div>


      {/* Body - Responsive grid */}
      <div className="flex  gap-6 p-6">

        {/* LEFT SIDE */}
        <div className="space-y-6 flex-1">

          {/* Payment Info */}
          <div className="rounded-lg bg-white border border-[#E5E7EB] p-5">
            <h3 className="text-sm font-semibold text-gray-800 mb-4">
              Payment Information
            </h3>

            <div className="grid grid-cols-2 gap-y-3 text-[13px]">
              <div className="text-gray-500">Payment ID</div>
              <div className="text-gray-800">PMT-001</div>

              <div className="text-gray-500">Status</div>
              <div>
                <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700">
                  ✓ Paid
                </span>
              </div>

              <div className="text-gray-500">Agent Name</div>
              <div className="text-gray-800">Donna Cozart</div>

              <div className="text-gray-500">Amount</div>
              <div className="text-gray-800 font-semibold">$5,200.00</div>

              <div className="text-gray-500">Payment Date</div>
              <div className="text-gray-800">September 30, 2024</div>

              <div className="text-gray-500">Method</div>
              <div className="text-gray-800">Bank Transfer</div>

              <div className="text-gray-500">Transaction ID</div>
              <div className="text-gray-800">TXN-845233</div>

              <div className="text-gray-500">Reference Note</div>
              <div className="text-gray-800">
                September commission batch
              </div>
            </div>
          </div>

          {/* Internal Notes */}
     <div className="rounded-xl border border-[#E5E7EB] bg-white p-6">
  <h3 className="text-[14px] font-semibold text-gray-800 mb-4">
    Internal Notes
  </h3>

  {/* Notes */}
  <div className="space-y-5 text-[13px]">

    <div className="leading-4">
      <p className="font-semibold text-gray-700">System</p>
      <p className="text-gray-600 mt-[2px]">Payment marked as completed</p>
      <span className="text-[11px] text-gray-400 block mt-1">
        2025-10-01 09:42 AM
      </span>
    </div>

    <div className="leading-4">
      <p className="font-semibold text-gray-700">Admin</p>
      <p className="text-gray-600 mt-[2px]">Payment marked as completed</p>
      <span className="text-[11px] text-gray-400 block mt-1">
        2025-10-01 09:42 AM
      </span>
    </div>

  </div>

  {/* Add Note */}
  <div className="mt-5">
    <textarea
      rows="2"
      placeholder="Add internal note..."
      className="w-full rounded-md border border-gray-300 px-3 py-2 text-[13px] outline-none focus:ring-2 focus:ring-blue-400"
    ></textarea>

    <button className="mt-3 rounded-md bg-[#2199E8] px-4 py-2 text-xs font-medium text-white ">
      Add Note
    </button>
  </div>
</div>

        </div>

        {/* RIGHT SIDE */}
        <div className="space-y-6 flex-1 ">

          {/* Summary */}
          <div className="rounded-lg border border-[#E5E7EB] p-5">
            <h3 className="text-sm font-semibold text-gray-800 mb-4">
              Summary
            </h3>

            <div className="grid grid-cols-2 gap-y-4 text-[13px]">
              <div className="text-gray-500">Total Amount</div>
              <div className="font-semibold text-gray-900">$5,200.00</div>

              <div className="text-gray-500">Date Processed</div>
              <div className="text-gray-800">September 30, 2025</div>

              <div className="text-gray-500">Last Updated By</div>
              <div className="text-gray-800">Admin</div>

              <div className="text-gray-500">Updated On</div>
              <div className="text-gray-800">2025-10-01 09:42 AM</div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="rounded-lg border border-[#E5E7EB] p-5">
            <h3 className="text-sm font-semibold text-gray-800 mb-4">
              Quick Actions
            </h3>

            <div className="space-y-3">

              <button className="flex w-full items-center justify-center gap-2 rounded-md bg-[#2199E8] px-4 py-2 text-sm font-medium text-white ">
                <FiDownload size={14} />
                Download Receipt
              </button>

              <button className="flex w-full items-center justify-center gap-2 rounded-md border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100">
                <FiMail size={14} />
                Send Email Notification
              </button>

              <button className="flex w-full items-center justify-center gap-2 rounded-md border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100">
                <FiPrinter size={14} />
                Print Details
              </button>

            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
