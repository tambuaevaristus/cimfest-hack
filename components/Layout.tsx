import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

export default function Layout({ children }: any) {
  const [isNavOpen, setIsNavOpen] = useState(false); // initiate isNavOpen state with false

  return (
    <div>
      <Navbar setIsNavOpen={setIsNavOpen} />

      <div className="flex w-full">
        <div className="lg:w-1/4">
          <Sidebar isNavOpen={isNavOpen} />
        </div>
        <div className="lg:w-3/4 mt-[50px]">{children}</div>
      </div>
    </div>
  );
}
