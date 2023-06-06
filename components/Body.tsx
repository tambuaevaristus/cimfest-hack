import React from "react";
import Dashboard from "./Dashboard";
import OrderList from "./OrderList";

export default function Body() {
  return (
    <div className=" lg:w-4/5 py-5 px-5 float-right container">
      <Dashboard />
      <OrderList />
    </div>
  );
}
