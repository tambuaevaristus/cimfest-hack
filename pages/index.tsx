import React from "react";

const Dashboard = () => {
  return (
    <div className="flex h-screen">
      <div className="w-1/5 bg-gray-800 text-white flex flex-col">
        <div className="py-4 px-6 bg-gray-900 border-b border-gray-700">
          <h1 className="text-2xl font-bold">Dashboard</h1>
        </div>
        <ul className="flex flex-col mt-6">
          <li className="mb-4">
            <a
              href="/"
              className="text-gray-400 hover:text-white cursor-pointer"
            >
              Dashboard
            </a>
          </li>
          <li className="mb-4">
            <a
              href="/billing"
              className="text-gray-400 hover:text-white cursor-pointer"
            >
              Billing
            </a>
          </li>
          <li className="mb-4">
            <a
              href="/settings"
              className="text-gray-400 hover:text-white cursor-pointer"
            >
              Settings
            </a>
          </li>
        </ul>
      </div>
      <div className="flex-1 bg-gray-200 p-10">
        <h2 className="text-2xl mb-8">Welcome to your Dashboard</h2>
        <p>This is where you can view and manage your account.</p>
      </div>
    </div>
  );
};

export default Dashboard;
