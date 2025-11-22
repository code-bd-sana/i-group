"use client";

import { useState } from "react";
import Image from "next/image";
import {
  FiMail,
  FiPhone,
  FiCalendar,
  FiMapPin,
  FiEdit2,
  FiLock,
  FiUser,
  FiTag,
  FiShield,
  FiLink,
  FiClock,
} from "react-icons/fi";

export default function ProfilePage() {
  const [name] = useState("Donna Cozart");
  const [role] = useState("Agent");
  const [company] = useState("Cozart Insurance LLC");
  const [email] = useState("donna@igroup.com");
  const [phone] = useState("+1 555-432-2299");
  const [joinDate] = useState("Joined Jan 15, 2025");
  const [status] = useState("Active");

  const [avatarFile, setAvatarFile] = useState(null);
  const [avatarPreview, setAvatarPreview] = useState(null);

  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const getInitials = (fullName) => {
    if (!fullName) return "";
    const parts = fullName.trim().split(" ");
    const first = parts[0]?.[0] || "";
    const last = parts[parts.length - 1]?.[0] || "";
    return (first + last).toUpperCase();
  };

  const handleAvatarChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setAvatarFile(file);
    const url = URL.createObjectURL(file);
    setAvatarPreview(url);
  };

  const handlePasswordUpdate = () => {
    // TODO: connect with backend
    console.log({ currentPassword, newPassword, confirmPassword });
    alert("Password update requested (demo).");
  };

  return (
    <div className="min-h-screen px-6 py-6">
      <div className="">
        {/* Page header */}
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-[18px] font-semibold text-[#111827]">
              Profile
            </h1>
            <p className="text-[13px] text-gray-500 mt-1">
              View your account information and update your password.
            </p>
          </div>

          <button className="flex items-center gap-2 px-4 py-2 bg-[#E2E8F0] rounded-lg text-[13px] text-gray-700 shadow-sm hover:bg-gray-100">
            <FiEdit2 className="text-[16px]" />
            Edit Profile
          </button>
        </div>

        {/* Main grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {/* LEFT COLUMN – Profile card + Change password */}
          <div className="space-y-5">
            {/* Profile card */}
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-5">
              {/* Avatar + upload */}
              <div className="flex flex-col items-center mb-5">
                <div className="relative w-24 h-24 rounded-full bg-[#E0EEFF] flex items-center justify-center text-[28px] font-semibold text-[#1D4ED8] overflow-hidden">
                  {avatarPreview ? (
                    // uploaded picture
                    <img
                      src={avatarPreview}
                      alt="Profile avatar"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    // fallback initials
                    <span>{getInitials(name)}</span>
                  )}

                  {/* status dot */}
                  <span className="absolute bottom-2 right-2 w-3.5 h-3.5 rounded-full bg-[#22C55E] border-2 border-white" />
                </div>

                <label className="mt-3 text-[12px] text-[#2199E8] cursor-pointer hover:underline">
                  Change Photo
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={handleAvatarChange}
                  />
                </label>

                <h2 className="mt-3 text-[22px] font-bold text-gray-900">
                  {name}
                </h2>
                <span className="mt-1 inline-flex items-center px-3 py-0.5 rounded-full bg-[#E5F1FF] text-[11px] text-[#2199E8] font-medium">
                  {role}
                </span>
              </div>

              {/* Info list */}
              <div className="space-y-2 text-[14px] text-gray-700">
                <div className="flex items-center gap-2">
                  <FiMail className="text-gray-400" />
                  <span>{email}</span>
                </div>
                <div className="flex items-center gap-2">
                  <FiPhone className="text-gray-400" />
                  <span>{phone}</span>
                </div>
                <div className="flex items-center gap-2">
                  <FiMapPin className="text-gray-400" />
                  <span>{company}</span>
                </div>
                <div className="flex items-center gap-2">
                  <FiCalendar className="text-gray-400" />
                  <span>{joinDate}</span>
                </div>
                <div className="flex items-center gap-2 mt-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#22C55E]" />
                  <span className="text-[12px] text-[#22C55E] font-medium">
                    {status}
                  </span>
                </div>
              </div>
            </div>

            {/* Change password card */}
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-5">
              <h3 className="text-[14px] font-semibold text-gray-800 mb-4">
                Change Password
              </h3>

              <div className="space-y-3 text-[13px]">
                <div>
                  <label className="block mb-1 text-gray-600">
                    Current Password
                  </label>
                  <input
                    type="password"
                    placeholder="Enter current password"
                    value={currentPassword}
                    onChange={(e) => setCurrentPassword(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg border border-gray-300 bg-[#F5F7FB] text-[13px] outline-none focus:ring-1 focus:ring-[#2199E8]"
                  />
                </div>
                <div>
                  <label className="block mb-1 text-gray-600">
                    New Password
                  </label>
                  <input
                    type="password"
                    placeholder="Enter new password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg border border-gray-300 bg-[#F5F7FB] text-[13px] outline-none focus:ring-1 focus:ring-[#2199E8]"
                  />
                </div>
                <div>
                  <label className="block mb-1 text-gray-600">
                    Confirm New Password
                  </label>
                  <input
                    type="password"
                    placeholder="Enter new password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg border border-gray-300 bg-[#F5F7FB] text-[13px] outline-none focus:ring-1 focus:ring-[#2199E8]"
                  />
                </div>
              </div>

              <button
                onClick={handlePasswordUpdate}
                className="mt-4 inline-flex items-center gap-2 px-4 py-2 bg-[#2199E8] text-white text-[13px] rounded-lg shadow-sm hover:bg-[#1a86c7]"
              >
                <FiLock className="text-[15px]" />
                Update Password
              </button>
            </div>
          </div>

          {/* RIGHT COLUMN – Account info + Security info */}

          <div className="flex flex-col gap-5 w-full">
            {/* ACCOUNT INFORMATION */}
            <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-5">
              <h3 className="text-[14px] font-semibold text-gray-900 mb-4">
                Account Information
              </h3>

              <div className="space-y-4 text-[13px]">
                {/* Row 1 */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-gray-600">
                    <FiUser className="text-[16px]" />
                    <span>Username</span>
                  </div>
                  <span className="text-gray-900 font-medium">
                    donna_cozart
                  </span>
                </div>

                {/* Row 2 */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-gray-600">
                    <FiShield className="text-[16px]" />
                    <span>Role</span>
                  </div>
                  <span className="text-gray-900 font-medium">Agent</span>
                </div>

                {/* Row 3 */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-gray-600">
                    <FiLink className="text-[16px]" />
                    <span>User ID</span>
                  </div>
                  <span className="text-gray-900 font-medium">AG-202501</span>
                </div>

                {/* Row 4 */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-gray-600">
                    <FiClock className="text-[16px]" />
                    <span>Last Login</span>
                  </div>
                  <span className="text-gray-900 font-medium">
                    Oct 05, 2025 - 09:45PM
                  </span>
                </div>
              </div>
            </div>

            {/* SECURITY INFORMATION */}
            <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-5">
              <h3 className="text-[14px] font-semibold text-gray-900 mb-4">
                Security Information
              </h3>

              <div className="space-y-4 text-[13px]">
                {/* Row 1 */}
                <div className="flex items-center justify-between">
                  <span className="text-gray-700">donna@igroup.com</span>
                  <span className="text-gray-500 font-medium">
                    donna_cozart
                  </span>
                </div>

                {/* Row 2 */}
                <div className="flex items-center justify-between">
                  <span className="text-gray-700">+1 555-432-2299</span>
                  <span className="text-gray-500 font-medium">Agent</span>
                </div>

                {/* Row 3 */}
                <div className="flex items-center justify-between">
                  <span className="text-gray-700">Cozart Insurance LLC</span>
                  <span className="text-gray-500 font-medium">AG-202501</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* Small helper components */

function InfoRow({ label, value, icon, alignRight }) {
  return (
    <div className="flex items-center gap-2">
      {icon && <span className="text-gray-400 text-[14px]">{icon}</span>}
      <div className="flex-1 text-gray-600">{label}</div>
      <div
        className={`flex-1 font-medium text-gray-900 ${
          alignRight ? "text-right" : ""
        }`}
      >
        {value}
      </div>
    </div>
  );
}

function DoubleSideRow({ left, right, icon }) {
  return (
    <div className="flex items-center gap-2">
      {icon && <span className="text-gray-400 text-[14px]">{icon}</span>}
      <div className="flex-1 text-gray-700">{left}</div>
      <div className="flex-1 text-right text-gray-900 font-medium">{right}</div>
    </div>
  );
}
