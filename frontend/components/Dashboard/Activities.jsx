"use client";

import { FiFileText, FiUsers, FiCreditCard, FiRepeat } from "react-icons/fi";

export default function Activities() {
  const items = [
    {
      title: "Upload Statements",
      subtitle: "Upload statements or data file",
      icon: <FiFileText className="text-[26px] text-[#2199E8]" />,
      bg: "bg-[#2199E840]",
      border: "border-[#2199E8]",
    },
    {
      title: "Upload Details",
      subtitle: "Batch upload of Details",
      icon: <FiUsers className="text-[26px] text-[#8B16A3]" />,
      bg: "bg-[#8B16A340]",
      border: "border-[#8B16A3]",
    },
    {
      title: "Upload Payments",
      subtitle: "Batch upload of payments",
      icon: <FiCreditCard className="text-[26px] text-[#16A34A]" />,
      bg: "bg-[#16A34A40]",
      border: "border-[#16A34A]",
    },
    {
      title: "Upload Adjustments",
      subtitle: "Batch upload of adjustements",
      icon: <FiRepeat className="text-[26px] text-[#14A3D8]" />,
      bg: "bg-[#14A3D840]",
      border: "border-[#14A3D8]",
    },
  ];

  return (
    <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-6 my-5">
      {/* Title */}
      <h3 className="text-[16px] font-semibold text-black">Activities:</h3>
      <p className="text-[14px] text-gray-600 mt-1 leading-relaxed max-w-4xl">
        Activities: The system will parse these uploads to the appropriate
        agent/agency based on the Internal ID associated with the particular
        agent or agency. This Internal ID is coming from our local database that
        generates the data and is used to identify the customer name it should
        match to.
      </p>

      {/* Cards */}
      <div className="mt-5 grid grid-cols-1 md:grid-cols-4 gap-4 mb-5">
        {items.map((item, i) => (
          <div
            key={i}
            className={`${item.bg} ${item.border} border rounded-xl p-5 flex items-start gap-4 shadow-sm`}
          >
            {/* Icon */}
            <div className="p-3 bg-white/20 rounded-lg flex items-center justify-center">
              {item.icon}
            </div>

            {/* Text */}
            <div>
              <h4 className="text-[15px] font-semibold text-black">
                {item.title}
              </h4>
              <p className="text-black text-[13px] mt-1">{item.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
