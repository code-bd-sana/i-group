'use client';
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

// export const metadata = {
//   title: "I-GROUP",
//   description: "",
// };

export default function RootLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  
  // Close sidebar when window is resized to desktop size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setSidebarOpen(false);
      }
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <html lang="en" data-theme="light">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#F8FAFC]`}>
        <div className="max-w-[2040px] mx-auto">
          <div className="flex gap-8">
            {/* Sidebar Section */}
     {/* Sidebar Section */}
<section
  className={`
    fixed md:relative 
    top-0 left-0 h-screen
    z-50 md:z-auto 
    transform transition-transform duration-300 ease-in-out
    ${sidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
  `}
>
  <div className="min-w-60 h-full">
    <Sidebar />
  </div>
</section>


            {/* Overlay for mobile when sidebar is open */}
            {sidebarOpen && (
              <div 
                className="fixed inset-0 duration-300 ease-in-out  bg-opacity-50 z-40 md:hidden"
                onClick={() => setSidebarOpen(false)}
              ></div>
            )}

            {/* Main Content Section */}
            <section className="flex-1 px-5  min-h-screen md:min-h-0">
              <TopBar 
                onMenuToggle={() => setSidebarOpen(!sidebarOpen)}
                sidebarOpen={sidebarOpen}
              />
              {children}
            </section>
          </div>
        </div>
      </body>
    </html>
  );
}