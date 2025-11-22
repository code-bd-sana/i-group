"use client";

import { useState } from "react";
import Image from "next/image";
import {
  FiChevronDown,
  FiUploadCloud,
  FiImage,
  FiSettings,
} from "react-icons/fi";

export default function GeneralSettings() {
  const [companyName, setCompanyName] = useState("iGroup Insurance Portal");
  const [tagline, setTagline] = useState("Empowering Insurance Growth");

  const [logoFile, setLogoFile] = useState(null);
  const [faviconFile, setFaviconFile] = useState(null);

  const [logoPreview, setLogoPreview] = useState(null); 
  const [faviconPreview, setFaviconPreview] = useState(null);

  // handle logo upload
  const handleLogoChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setLogoFile(file);
    const url = URL.createObjectURL(file);
    setLogoPreview(url);
  };

  // handle favicon upload
  const handleFaviconChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setFaviconFile(file);
    const url = URL.createObjectURL(file);
    setFaviconPreview(url);
  };

  const handleReset = () => {
    setCompanyName("iGroup Insurance Portal");
    setTagline("Empowering Insurance Growth");
    setLogoFile(null);
    setFaviconFile(null);
    setLogoPreview(null);
    setFaviconPreview(null);
  };

  const handleSave = () => {
    // connect this to your API later
    console.log({
      companyName,
      tagline,
      logoFile,
      faviconFile,
    });
    alert("Settings saved (demo).");
  };

  return (
    <div className="min-h-screen px-6 py-6">
      <div className="">
        {/* PAGE HEADER */}
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-[20px] font-semibold text-[#111827]">
              General Settings
            </h1>
            <p className="text-[13px] text-gray-500 mt-1">
              Manage system branding, theme, and preferences.
            </p>
          </div>

          {/* Top-right choose file */}
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-lg text-[13px] text-gray-700 shadow-sm hover:bg-gray-50">
            <FiUploadCloud className="text-[16px]" />
            Choose File
          </button>
        </div>

        {/* TABS */}
        <div className="mb-4 flex items-center gap-6 border-b border-gray-200">
          <button className="flex items-center gap-2 pb-3 border-b-2 border-[#2199E8] text-[14px] font-medium text-[#2199E8]">
            <FiSettings className="text-[16px]" />
            General
          </button>
         
        </div>

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {/* LEFT – BRANDING */}
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-5">
            <h2 className="text-[15px] font-semibold text-gray-800 mb-4">
              Branding
            </h2>

            {/* Company / Portal Name */}
            <div className="mb-4">
              <label className="block text-[13px] text-gray-600 mb-1">
                Company / Portal Name
              </label>
              <input
                type="text"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-[14px] outline-none focus:ring-1 focus:ring-[#2199E8]"
              />
            </div>

            {/* Logo + Favicon */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              {/* Logo Upload */}
              <div>
                <p className="text-[13px] text-gray-600 mb-1">Logo Upload</p>
                <p className="text-[12px] text-gray-400 mb-2">
                  PNG/SVG, 200×200px
                </p>

                <label className="border border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center gap-2 px-3 py-4 cursor-pointer hover:border-[#2199E8] hover:bg-[#F9FBFF] transition">
                  <div className="w-10 h-10 rounded-full bg-[#F3F4F6] flex items-center justify-center">
                    <FiImage className="text-gray-500 text-[20px]" />
                  </div>
                  <span className="px-3 py-1 bg-[#2199E8] text-white text-[12px] rounded-md">
                    Choose File
                  </span>
                  <span className="text-[11px] text-gray-400">
                    {logoFile ? logoFile.name : "No file chosen"}
                  </span>
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={handleLogoChange}
                  />
                </label>
              </div>

              {/* Favicon Upload */}
              <div>
                <p className="text-[13px] text-gray-600 mb-1">Favicon Upload</p>
                <p className="text-[12px] text-gray-400 mb-2">
                  ICO/PNG, 32×32px
                </p>

                <label className="border border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center gap-2 px-3 py-4 cursor-pointer hover:border-[#2199E8] hover:bg-[#F9FBFF] transition">
                  <div className="w-10 h-10 rounded-full bg-[#F3F4F6] flex items-center justify-center">
                    <FiImage className="text-gray-500 text-[20px]" />
                  </div>
                  <span className="px-3 py-1 bg-[#2199E8] text-white text-[12px] rounded-md">
                    Choose File
                  </span>
                  <span className="text-[11px] text-gray-400">
                    {faviconFile ? faviconFile.name : "No file chosen"}
                  </span>
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={handleFaviconChange}
                  />
                </label>
              </div>
            </div>

            {/* Tagline */}
            <div className="mb-4">
              <label className="block text-[13px] text-gray-600 mb-1">
                Tagline (optional)
              </label>
              <input
                type="text"
                value={tagline}
                onChange={(e) => setTagline(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-[14px] outline-none focus:ring-1 focus:ring-[#2199E8]"
              />
            </div>

            {/* Preview */}
            <div>
              <p className="text-[13px] text-gray-600 mb-2">Preview</p>

              <div className="bg-[#F3F4F6] rounded-lg px-4 py-3 flex items-center gap-3 border border-gray-200">
                {/* Logo square */}
                <div className="w-12 h-12 rounded-lg bg-[#1D4ED8] flex items-center justify-center overflow-hidden">
                  {logoPreview ? (
                    <img
                      src={logoPreview}
                      alt="Logo preview"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    // Default logo from public folder
                    <Image
                      src="/logo.png" // put your logo in /public/igroup-logo.png
                      alt="Logo"
                      width={48}
                      height={48}
                      className="object-contain"
                    />
                  )}
                </div>

                <div className="flex flex-col">
                  <span className="text-[14px] font-semibold text-gray-900">
                    {companyName || "Portal Name"}
                  </span>
                  <span className="text-[12px] text-gray-500">
                    {tagline || "Tagline goes here"}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT – SYSTEM PREFERENCES */}
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-5">
            <h2 className="text-[15px] font-semibold text-gray-800 mb-4">
              System Preferences
            </h2>

            <div className="space-y-4 text-[13px]">
              <SelectRow label="Default Language" value="English" />
              <SelectRow label="Default Currency" value="USD" />
              <SelectRow label="Time Zone" value="GMT+6 (Dhaka)" />
              <SelectRow label="Date Format" value="DD-MM-YYYY" />
              <SelectRow label="Number Format" value="1,00,0" />
            </div>
          </div>
        </div>

        {/* BOTTOM BUTTONS */}
        <div className="flex items-center justify-end gap-3 mt-6">
          <button
            onClick={handleReset}
            className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-[13px] text-gray-600 shadow-sm hover:bg-gray-100"
          >
            Reset to Default
          </button>
          <button
            onClick={handleSave}
            className="px-5 py-2 bg-[#2199E8] text-white rounded-lg text-[13px] font-medium shadow-sm hover:bg-[#1b86c7]"
          >
            Save Settings
          </button>
        </div>
      </div>
    </div>
  );
}

/* ---------- Small reusable piece ---------- */

function SelectRow({ label, value }) {
  return (
    <div>
      <p className="text-[13px] text-gray-600 mb-1">{label}</p>
      <div className="relative">
        <select className="w-full appearance-none border border-gray-300 rounded-lg px-3 py-2 text-[14px] bg-white">
          <option>{value}</option>
        </select>
        <FiChevronDown className="absolute right-3 top-2.5 text-gray-400 text-[16px]" />
      </div>
    </div>
  );
}
