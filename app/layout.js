"use client";
import Footer from "@/components/footer/Footer";
import Navbar from "../components/navbar/Navbar";
import "./globals.css";
import { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

export const metadata = {
  title: "Param Computer Classes | Rajkot",
  description: "Param Computer Classes provides several courses.",
};

export default function RootLayout({ children }) {
  useEffect(() => {
    AOS.init({
      startEvent: "DOMContentLoaded",
      initClassName: "aos-init",
      animatedClassName: "aos-animate",
    });
  }, []);
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
