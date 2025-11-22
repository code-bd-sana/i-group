"use client";

import { FiFileText } from "react-icons/fi";

export default function RecentUploads() {
  const uploads = [
    {
      name: "Jan_Statements.csv",
      user: "Admin",
      date: "Oct 1, 2025",
      action: "View",
      actionColor: "text-[#F04444]",
    },
    {
      name: "PaymentData.csv",
      user: "Donna Smith",
      date: "Oct 3, 2025",
      action: "View",
      actionColor: "text-[#F04444]",
    },
    {
      name: "BonusReport.csv",
      user: "Mark Johnson",
      date: "Oct 3, 2025",
      action: "Retry",
      actionColor: "text-[#EF8A3D]",
    },
    {
      name: "Sep_Statements.csv",
      user: "Sarah Wilson",
      date: "Oct 8, 2025",
      action: "View",
      actionColor: "text-[#F04444]",
    },
    {
      name: "CarrierData.csv",
      user: "Admin",
      date: "Oct 9, 2025",
      action: "View",
      actionColor: "text-[#F04444]",
    },
  ];

  return (
    <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 mt-6">
      <h3 className="text-[15px] font-semibold text-black mb-4">
        Recent Uploads
      </h3>

      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="text-gray-500 text-[13px] font-medium">
              <th className="pb-3">FILE NAME</th>
              <th className="pb-3">UPLOADED BY</th>
              <th className="pb-3">DATE</th>
              <th className="pb-3">ACTION</th>
            </tr>
          </thead>

          <tbody>
            {uploads.map((item, index) => (
              <tr
                key={index}
                className="text-[14px] text-gray-700 border-b border-gray-100 last:border-none"
              >
                {/* File Name */}
                <td className="py-3 flex items-center gap-2">
                  <FiFileText className="text-[18px] text-gray-500" />
                  {item.name}
                </td>

                {/* Uploaded By */}
                <td className="py-3">{item.user}</td>

                {/* Date */}
                <td className="py-3">{item.date}</td>

                {/* Action */}
                <td className="py-3">
                  <button
                    className={`font-medium ${item.actionColor} hover:underline`}
                  >
                    {item.action}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
