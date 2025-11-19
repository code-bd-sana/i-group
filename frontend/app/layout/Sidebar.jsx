"use client";

import React from "react";
import Image from "next/image";
import logo from "@/asset/image/logo.png";
import { usePathname } from "next/navigation";

import { AiOutlineHome } from "react-icons/ai";
import { FaRegUserCircle } from "react-icons/fa";
import { HiOutlineDocumentText } from "react-icons/hi";
import { RiWallet3Line } from "react-icons/ri";
import { LuGift } from "react-icons/lu";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { MdOutlineBarChart } from "react-icons/md";
import { FiSettings, FiLogOut } from "react-icons/fi";
import { PiNotebook } from "react-icons/pi";
import { RxAvatar } from "react-icons/rx";
import { CiCircleQuestion } from "react-icons/ci";

export default function Sidebar() {
  const pathname = usePathname();

  const menuItems = [
    { name: "Dashboard", icon: <AiOutlineHome />, path: "/" },
    { name: "Agents / Accounts", icon: <FaRegUserCircle />, path: "/agents" },
    { name: "Statements", icon: <HiOutlineDocumentText />, path: "/statements" },
    { name: "Payments", icon: <RiWallet3Line />, path: "/payments" },
    { name: "Bonus Level", icon: <LuGift />, path: "/bonus" },
    { name: "Carriers", icon: <HiOutlineBuildingOffice2 />, path: "/carriers" },
    { name: "Report Center", icon: <MdOutlineBarChart />, path: "/reports" },
    { name: "Settings", icon: <FiSettings />, path: "/settings" },
    { name: "Logs", icon: <PiNotebook />, path: "/logs" },
    { name: "Profile", icon: <RxAvatar />, path: "/profile" },
    { name: "Help / Contact", icon: <CiCircleQuestion />, path: "/help" },
    { name: "Logout", icon: <FiLogOut />, path: "/logout" },
  ];

  const isActivePath = (path) => pathname.startsWith(path);

  return (
    <div className="bg-white border-r border-[#E2E8F0] fixed  top-0 h-screen w-60 flex flex-col">
      
      {/* Logo Section (Not scrollable) */}
      <div className="flex justify-center py-4">
        <Image
          src={logo}
          alt="logo"
          className="w-[140px] h-[81px] object-contain"
        />
      </div>

      <div className="border-b border-[#E2E8F0] w-[80%] mx-auto"></div>

      {/* Scrollable Menu Section */}
      <div className="flex-1 overflow-y-auto mt-2 px-3 pb-4 space-y-1">
        {menuItems.map((item, index) => {
          const active = isActivePath(item.path);

          return (
            <div
              key={index}
              className={`flex items-center gap-3 px-3 mt-3 py-3 rounded-lg cursor-pointer text-[15px]
              ${
                active
                  ? "bg-[#F1F6FF] text-[#2563EB] border-l-4 border-[#2199E8] font-medium"
                  : "bg-[#F8FAFC] hover:bg-gray-100 text-[#475569]"
              }`}
            >
              <span
                className={`text-[20px] ${
                  active ? "text-[#2563EB]" : "text-gray-500"
                }`}
              >
                {item.icon}
              </span>
              <span>{item.name}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
