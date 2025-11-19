import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import TopBar from "./layout/TopBar";
import Sidebar from "./layout/Sidebar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "I-GROUP",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <body className={` antialiased bg-[#F8FAFC]`}>
        <div className="max-w-[2040px] mx-auto ">
          <div className="grid grid-cols-6 gap-8">
            <section className="cols-span-1">
              <Sidebar />
            </section>

            <section className="col-span-5">
              <TopBar />
              {children}
            </section>
          </div>
        </div>
      </body>
    </html>
  );
}
