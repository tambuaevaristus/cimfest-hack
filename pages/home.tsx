import Dashboard from "@/components/Dashboard";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import React from "react";

export default function home() {
  return (
    <div>
      {" "}
      <div>
        <Navbar />
        <Sidebar />
      </div>
      <Dashboard />
    </div>
  );
}
