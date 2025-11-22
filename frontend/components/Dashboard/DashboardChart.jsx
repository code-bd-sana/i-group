"use client";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
  PointElement,
} from "chart.js";
import { Bar } from "react-chartjs-2";

import {
  FiCheckCircle,
  FiUserPlus,
  FiFileText,
  FiBell,
  FiArrowRight,
} from "react-icons/fi";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
  PointElement
);

export default function DashboardChart() {
  const data = {
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
      // 🔥 Dummy dataset for legend (red dot)
      {
        label: "Statements",
        data: new Array(12).fill(null), // keeps dataset valid
        pointStyle: "circle",
        pointRadius: 7,
        pointBackgroundColor: "#EF4444",
        backgroundColor: "transparent",
        borderColor: "transparent",
      },

      // 🔵 Real dataset
      {
        label: "Payments ($K)",
        data: [180, 290, 240, 310, 440, 500, 690, 740, 650, 380, 720, 680],
        backgroundColor: "#3B82F6",
        borderRadius: 12,
        barThickness: 38, // 🔥 Thick like Figma
        categoryPercentage: 0.45,
        barPercentage: 0.95,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,

    plugins: {
      legend: {
        display: true,
        position: "top",
        align: "end", // 🔥 Moves legend to exact TOP-RIGHT
        labels: {
          usePointStyle: true,
          boxWidth: 10,
          padding: 20,
          font: {
            size: 13,
            weight: "500",
          },
        },
      },

      tooltip: {
        titleFont: { size: 12 },
        bodyFont: { size: 12 },
        padding: 8,
        displayColors: false,
      },
    },

    layout: {
      padding: {
        top: -5, // 🔥 Pulls legend flush to top like Figma
      },
    },

    scales: {
      y: {
        min: 0,
        max: 850,
        ticks: {
          stepSize: 100,
          font: { size: 11 },
          color: "#9CA3AF",
        },
        grid: {
          color: "#E5E7EB",
          drawBorder: false,
        },
      },

      x: {
        ticks: {
          font: { size: 11 },
          color: "#9CA3AF",
        },
        grid: { display: false },
        offset: true,
      },
    },
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-5">

      {/* CHART */}
      <div className="col-span-2 bg-white rounded-xl border border-gray-100 shadow-sm p-6">
        <h3 className="text-[15px] font-semibold text-[#0D1726] mb-3">
          Monthly Statements
        </h3>

        <div className="h-[270px]">
          <Bar data={data} options={options} />
        </div>
      </div>

      {/* ACTIVITY FEED */}
      <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
        <h3 className="text-[15px] font-semibold text-black mb-4">
          Activity Feed
        </h3>

        <div className="space-y-4">
          <ActivityItem
            icon={<FiFileText className="text-blue-500" />}
            text="Admin uploaded 3 new statements."
            time="2h ago"
          />
          <ActivityItem
            icon={<FiCheckCircle className="text-green-500" />}
            text="Agent Donna viewed September report."
            time="Yesterday"
          />
          <ActivityItem
            icon={<FiBell className="text-purple-500" />}
            text="Payment batch #32 processed"
            time="3 days ago"
          />
          <ActivityItem
            icon={<FiUserPlus className="text-orange-500" />}
            text="New agent Mark Johnson register"
            time="5 days ago"
          />
          <ActivityItem
            icon={<FiCheckCircle className="text-red-500" />}
            text="Bonus calculation completed for September"
            time="1 week ago"
          />
        </div>

        <button className="mt-6 text-[#EA3A3A] font-medium flex items-center gap-1 text-sm hover:underline">
          View All Activities <FiArrowRight />
        </button>
      </div>
    </div>
  );
}

function ActivityItem({ icon, text, time }) {
  return (
    <div className="flex items-start gap-3">
      <div className="w-9 h-9 rounded-lg bg-gray-100 flex items-center justify-center">
        {icon}
      </div>
      <div>
        <p className="text-[14px] text-gray-700">{text}</p>
        <p className="text-[12px] text-gray-400">{time}</p>
      </div>
    </div>
  );
}
