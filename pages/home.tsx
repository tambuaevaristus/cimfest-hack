import Dashboard from "@/components/Dashboard";
import Navbar from "@/components/Navbar";
import OrderList from "@/components/FileList";
import Sidebar from "@/components/Sidebar";
import React from "react";

export default function home() {
  return (
    <div>
      {" "}
        <Navbar />
      <div className="flex">
        <Sidebar />
      <Dashboard />


      <OrderList />
      </div>
    </div>
  );
}
