import React from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <div>
      <Navbar />
      <Sidebar />
      <div className="main">{children}</div>
    </div>
  );
}
