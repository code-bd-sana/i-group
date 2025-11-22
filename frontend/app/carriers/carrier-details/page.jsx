// app/carrier-details/page.js  OR  pages/carrier-details.js
"use client";

import React from "react";
import Image from "next/image";
import { FiChevronLeft, FiEdit2 } from "react-icons/fi"; 
import Link from "next/link";

export default function CarrierDetails() {
  return (
    <div className="min-h-screen bg-[#F4F6FB] text-slate-800">
      <main className="w-full px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        {/* Top Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
          <div className="flex items-start gap-3">
            <button className="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-full bg-transparent text-slate-500 hover:bg-slate-100 transition">
              <FiChevronLeft className="h-5 w-5" />
            </button>
            <div>
              <h1 className="text-lg sm:text-xl font-semibold text-slate-800">
                Carrier Details - Global Life Insurance
              </h1>
              <p className="mt-1 text-xs sm:text-sm text-slate-500">
                Manage carrier information and settings
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Link href="/carriers" className="inline-flex items-center justify-center rounded-md border border-slate-200 bg-white px-4 py-2 text-xs sm:text-sm font-medium text-slate-700 hover:bg-slate-50">
              Cancel
            </Link>
            <button className="inline-flex items-center justify-center rounded-md bg-[#1672F8] px-4 sm:px-5 py-2 text-xs sm:text-sm font-medium text-white shadow-sm hover:bg-[#115dd0]">
              Edit Carrier
            </button>
          </div>
        </div>

        {/* Main Card: Carrier Information */}
        <section className="mb-6 rounded-xl border border-slate-200 bg-white shadow-sm">
          <div className="flex items-center justify-between px-5 sm:px-6 pt-5 pb-3">
            <h2 className="text-sm font-semibold text-slate-800">
              Carrier Information
            </h2>
            <button className="inline-flex items-center gap-2 rounded-md border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 hover:bg-slate-50">
              <FiEdit2 className="h-4 w-4" />
              <span>Edit</span>
            </button>
          </div>

          <div className="px-5 sm:px-6 pb-5 sm:pb-6">
            <div className="grid gap-4 sm:gap-5 md:grid-cols-2">
              {/* Carrier Name */}
              <div>
                <LabelWithStar>Carrier Name</LabelWithStar>
                <InputField value="Global Life Insurance" />
              </div>

              {/* Phone */}
              <div>
                <LabelWithStar>Phone</LabelWithStar>
                <InputField value="+1 555-234-6789" />
              </div>

              {/* Carrier Code */}
              <div>
                <LabelWithStar>Carrier Code</LabelWithStar>
                <InputField value="GLI" />
              </div>

              {/* Email */}
              <div>
                <LabelWithStar>Email</LabelWithStar>
                <InputField value="sarah@globallife.com" />
              </div>

              {/* Address */}
              <div className="md:col-span-1">
                <LabelPlain>Address</LabelPlain>
                <InputField value="22 Madison Ave, New York, NY 10010" />
              </div>

              {/* Status */}
              <div>
                <LabelPlain>Status</LabelPlain>
                <div className="mt-2 text-sm font-medium text-emerald-600 inline-flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-emerald-500" />
                  Active
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Bottom Cards */}
        <section className="grid gap-6 md:grid-cols-2">
          {/* Associated Agents */}
          <div className="rounded-xl border border-slate-200 bg-white shadow-sm">
            <div className="px-5 sm:px-6 pt-5 pb-3">
              <h3 className="text-sm font-semibold text-slate-800">
                Associated Agents (Automated)
              </h3>
            </div>

            <div className="px-5 sm:px-6 pb-5 sm:pb-6">
              <div className="flex justify-between text-xs font-medium text-slate-500 border-b border-slate-100 pb-3">
                <span>Agent Name</span>
                <span>Status</span>
              </div>

              <div className="divide-y divide-slate-100">
                <AgentRow
                  initials="DC"
                  name="Donna Cozart"
                  status="Active"
                />
                <AgentRow initials="FW" name="Frank Wang" status="Active" />
                <AgentRow initials="KA" name="Kelly Adams" status="Active" />
              </div>
            </div>
          </div>

          {/* Bonus Level Settings */}
          <div className="rounded-xl border border-slate-200 bg-white shadow-sm">
            <div className="px-5 sm:px-6 pt-5 pb-3">
              <h3 className="text-sm font-semibold text-slate-800">
                Bonus Level Settings
              </h3>
            </div>

            <div className="px-5 sm:px-6 pb-5 sm:pb-6">
              <div className="grid grid-cols-[1.5fr,1fr,1fr] text-xs font-medium text-slate-500 border-b border-slate-100 pb-3">
                <span>Level</span>
                <span>Status</span>
                <span className="text-right">Status</span>
              </div>

              <div className="divide-y divide-slate-100">
                <BonusRow color="#9F7AEA" level="Platinum" />
                <BonusRow color="#F6AD55" level="Gold" />
                <BonusRow color="#A0AEC0" level="Silver" />
              </div>
            </div>
          </div>
        </section>

        {/* Hidden Next/Image example (replace with your real asset in /public if you want) */}
        <div className="sr-only">
          <Image
            src="/placeholder-avatar.png"
            alt="placeholder"
            width={40}
            height={40}
          />
        </div>
      </main>
    </div>
  );
}

/* ---------- Small Reusable Pieces ---------- */

function LabelWithStar({ children }) {
  return (
    <label className="flex items-center gap-1 text-xs font-medium text-slate-500">
      {children}
      <span className="text-red-500">*</span>
    </label>
  );
}

function LabelPlain({ children }) {
  return (
    <label className="text-xs font-medium text-slate-500">{children}</label>
  );
}

function InputField({ value }) {
  return (
    <div className="mt-2">
      <input
        readOnly
        value={value}
        className="w-full rounded-md border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-800 shadow-inner focus:outline-none focus:ring-1 focus:ring-[#1672F8]"
      />
    </div>
  );
}

function AgentRow({ initials, name, status }) {
  return (
    <div className="flex items-center justify-between py-3">
      <div className="flex items-center gap-3">
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#1672F8] text-xs font-semibold text-white">
          {initials}
        </div>
        <span className="text-sm text-slate-800">{name}</span>
      </div>
      <div className="inline-flex items-center gap-2 text-xs font-medium text-emerald-600">
        <span className="h-2 w-2 rounded-full bg-emerald-500" />
        {status}
      </div>
    </div>
  );
}

function BonusRow({ color, level }) {
  return (
    <div className="grid grid-cols-[1.5fr,1fr,1fr] items-center py-3 text-sm">
      <div className="flex items-center gap-2 text-slate-800">
        <span
          className="h-2 w-2 rounded-full"
          style={{ backgroundColor: color }}
        />
        <span>{level}</span>
      </div>
      <div className="inline-flex items-center gap-2 text-xs font-medium text-emerald-600">
        <span className="h-2 w-2 rounded-full bg-emerald-500" />
        Active
      </div>
      <button className="ml-auto text-xs font-medium text-[#1672F8] hover:underline">
        View PDF
      </button>
    </div>
  );
}