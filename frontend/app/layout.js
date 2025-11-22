"use client";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import TopBar from "./layout/TopBar";
import Sidebar from "./layout/Sidebar";
import { useState, useEffect } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setSidebarOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#F8FAFC]`}
      >
        <div className="w-full h-screen flex overflow-hidden">
          {/* ================= SIDEBAR (FIXED) ================= */}
          <div
            className={`
              fixed z-50 
              lg:relative lg:z-auto
              h-full w-60
              transform transition-transform duration-300
              ${
                sidebarOpen
                  ? "translate-x-0"
                  : "-translate-x-full lg:translate-x-0"
              }
            `}
          >
            <Sidebar />
          </div>

          {/* ====== Transparent overlay for mobile ====== */}
          {sidebarOpen && (
            <div
              className="fixed inset-0 bg-transparent z-40 lg:hidden"
              onClick={() => setSidebarOpen(false)}
            />
          )}

          {/* ================= MAIN CONTENT ================= */}
          <div className="flex-1 h-full flex flex-col overflow-hidden">
            {/* Topbar (fixed) */}
            <div className="sticky ml-5 top-0 z-30 bg-[#F8FAFC]">
              <TopBar
                onMenuToggle={() => setSidebarOpen(!sidebarOpen)}
                sidebarOpen={sidebarOpen}
              />
            </div>

            {/* Scrollable page content */}
            <main className="flex-1 overflow-y-auto px-6 py-4">{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}
