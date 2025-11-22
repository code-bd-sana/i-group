"use client";

import Image from "next/image";

export default function AgentRow({ data }) {
  return (
    <tr className="border-b last:border-b-0 border-gray-200 text-sm">
      {/* Agent Name + Avatar + ID */}
      <td className="py-4">
        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
          {/* Avatar */}
          {data.avatar ? (
            <Image
              src={data.avatar}
              alt={data.name}
              width={40}
              height={40}
              className="rounded-full"
            />
          ) : (
            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center font-semibold text-blue-600">
              {data.name?.charAt(0)}
            </div>
          )}

          <div className="flex flex-col">
            <p className="font-medium">{data.name}</p>
            {data.id && <p className="text-xs text-gray-500">{data.id}</p>}
          </div>
        </div>
      </td>

      {/* Email + Phone */}
      <td className="py-4">
        <div className="flex flex-col">
          <p className="truncate max-w-[120px] sm:max-w-none">{data.email}</p>
          {data.phone && (
            <p className="text-xs text-gray-500 truncate max-w-[120px] sm:max-w-none">
              {data.phone}
            </p>
          )}
        </div>
      </td>

      {/* Status */}
      <td className="py-4">
        <span
          className={`px-3 py-1 text-xs rounded-full whitespace-nowrap ${
            data.status === "Active"
              ? "bg-green-50 text-green-600 border border-green-300"
              : "bg-red-50 text-red-600 border border-red-300"
          }`}
        >
          {data.status}
        </span>
      </td>

      {/* Role */}
      <td className="py-4 text-gray-700">{data.role}</td>

      {/* Created Date */}
      <td className="py-4 text-gray-700">{data.date}</td>

      {/* Actions */}
      <td className="py-4 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 text-sm">
        <button className="text-blue-600 hover:underline">Edit</button>
        <button className="text-red-500 hover:underline">Delete</button>
      </td>
    </tr>
  );
}
