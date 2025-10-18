import React from "react";
import Navbar from "../navbar/Navbar.jsx";
import Footer from "../footer/Footer.jsx";

export default function Layout({ children }) {
  return (
    <div className="bg-[#0a0a0a] min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-16">{children}</main>
      <Footer />
    </div>
  );
}
