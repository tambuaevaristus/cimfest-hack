import Dashboard from "@/components/Dashboard";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import Link from "next/link";
import React from "react";

const index = () => {
  return (
    <div>
      <Navbar />
      <Sidebar />
      <Dashboard />
    </div>
  );
};

export default index;
