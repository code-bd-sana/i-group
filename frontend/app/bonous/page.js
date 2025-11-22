"use client";

import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import Image from "next/image";
import { FiAward, FiChevronLeft, FiUsers } from "react-icons/fi";

// -------------------------
// Chart.js setup
// -------------------------
ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

// Plugin to draw the tall grey background bars
const backgroundBarsPlugin = {
  id: "backgroundBars",
  beforeDatasetsDraw(chart, args, pluginOptions) {
    const {
      ctx,
      chartArea: { top, bottom },
      scales: { x },
    } = chart;

    if (!x) return;

    const barWidth = pluginOptions?.barWidth || 40;
    const color = pluginOptions?.color || "#E6EBF1";

    ctx.save();
    ctx.fillStyle = color;

    x.getTicks().forEach((tick, index) => {
      const xPos = x.getPixelForValue(index) - barWidth / 2;
      const height = bottom - top;
      ctx.fillRect(xPos, top, barWidth, height);
    });

    ctx.restore();
  },
};

ChartJS.register(backgroundBarsPlugin);

// -------------------------
// Table data
// -------------------------
const bonusRows = [
  {
    carrier: "Global Life Insurance",
    line: "Life",
    status: "$162",
    bonus: "10%",
  },
  {
    carrier: "Health Shield Corp",
    line: "Health",
    status: "$6,900",
    bonus: "8%",
  },
  {
    carrier: "Secure Annuity",
    line: "Annuity",
    status: "$14,500",
    bonus: "12%",
  },
  {
    carrier: "Future Partners",
    line: "Life",
    status: "$13,720",
    bonus: "6%",
  },
];

// -------------------------
// Chart data
// -------------------------
const chartData = {
  labels: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],
  datasets: [
    {
      label: "Bonus",
      data: [260, 320, 310, 560, 500, 500, 320, 380, 700, 720, 520, 820],
      backgroundColor: "#2196F3",
      borderRadius: 12,
      barThickness: 40, // thicker bars
      categoryPercentage: 0.5,
      barPercentage: 1.0,
    },
  ],
};

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  layout: {
    padding: {
      top: 10,
      right: 10,
      left: 0,
      bottom: 10,
    },
  },
  plugins: {
    legend: { display: false },
    tooltip: {
      padding: 8,
      titleFont: { size: 12 },
      bodyFont: { size: 12 },
      displayColors: false,
    },
    // options for our custom background bars plugin
    backgroundBars: {
      barWidth: 40,
      color: "#E6EDF5",
    },
  },
  scales: {
    y: {
      min: 0,
      max: 850,
      ticks: {
        stepSize: 100,
        color: "#9CA3AF",
        font: { size: 11 },
      },
      grid: {
        color: "#E5E7EB",
        drawBorder: false,
      },
    },
    x: {
      ticks: {
        color: "#9CA3AF",
        font: { size: 11 },
      },
      grid: { display: false },
    },
  },
};

// -------------------------
// Page component
// -------------------------
export default function BonusOverview() {
  return (
    <div className="min-h-screen px-6 py-6">
      <div className="">
        {/* HEADER */}
        <div className="flex items-center gap-4 mb-6">
          <button className="w-8 h-8 rounded-full bg-white border border-gray-200 shadow-sm flex items-center justify-center">
            <FiChevronLeft className="text-gray-600 text-[16px]" />
          </button>

          <div className="flex items-center gap-3">
            <div className="relative w-10 h-10 rounded-full overflow-hidden bg-[#E0EEFF]">
              {/* make sure /public/agent-avatar.png exists */}
              <Image
                src="/profile.jpg"
                alt="Donna Cozart"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h1 className="text-[16px] font-semibold text-gray-900">
                Donna Cozart
              </h1>
              <p className="text-[12px] text-gray-500">
                Agent • Cozart Insurance LLC
              </p>
            </div>
          </div>
        </div>

        {/* TOP ROW – TABLE + SUMMARY CARD */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mb-6">
          {/* Bonus Levels table (2/3 width) */}
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-5 lg:col-span-2">
            <h2 className="text-[14px] font-semibold text-gray-900 mb-4">
              Bonus Levels by Carrier
            </h2>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-left text-[13px] min-w-[560px]">
                <thead>
                  <tr className="bg-[#F7FAFD] text-gray-600 border-b border-gray-200">
                    <th className="px-5 py-3 font-medium">Carrier</th>
                    <th className="px-5 py-3 font-medium">Line of Business</th>
                    <th className="px-5 py-3 font-medium">Status</th>
                    <th className="px-5 py-3 font-medium">Bonus Level %</th>
                  </tr>
                </thead>
                <tbody>
                  {bonusRows.map((row, index) => (
                    <tr
                      key={index}
                      className="border-b last:border-b-0 border-gray-100 text-gray-700"
                    >
                      <td className="px-5 py-4">{row.carrier}</td>
                      <td className="px-5 py-4">{row.line}</td>
                      <td className="px-5 py-4 font-semibold text-gray-900">
                        {row.status}
                      </td>
                      <td className="px-5 py-4">{row.bonus}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Total Payments card (1/3 width) */}

          <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 flex flex-col justify-between">
            {/* TOP SECTION */}
            <div className="flex items-start justify-between">
              <div>
                <p className="text-[12px] text-gray-500 tracking-wide">
                  Total Payments
                </p>
                <p className="mt-1 text-[22px] font-semibold text-gray-900">
                  $15,320
                </p>
              </div>

              <div className="w-10 h-10 rounded-xl bg-[#E6F8EF] flex items-center justify-center">
                <FiAward className="text-[#1DBF73] text-[20px]" />
              </div>
            </div>

            {/* DIVIDER */}
            <div className="w-full border-t border-gray-200 my-6"></div>

            {/* BOTTOM SECTION */}
            <div className="grid grid-cols-2 gap-4 text-[14px]">
              <div>
                <p className="text-gray-500 text-[12px] mb-1">Earned</p>
                <p className="text-[18px] font-semibold text-gray-900">
                  $15,320
                </p>
              </div>

              <div className="text-right">
                <p className="text-gray-500 text-[12px] mb-1">Total</p>
                <p className="text-[18px] font-semibold text-gray-900">
                  $15,320
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* MONTHLY BONUS TREND CHART */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-5">
          <h3 className="text-[14px] font-semibold text-gray-900 mb-3">
            Monthly Bonus Trend
          </h3>

          <div className="h-[260px] lg:h-[300px]">
            <Bar data={chartData} options={chartOptions} />
          </div>
        </div>
      </div>
    </div>
  );
}
