import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

export default function Layout({ children }: any) {
  const [isNavOpen, setIsNavOpen] = useState(false); // initiate isNavOpen state with false

  return (
    <div>
      <Navbar setIsNavOpen={setIsNavOpen} />

      <div className="md:grid">
        <div className="grid-cols-4">
          <Sidebar isNavOpen={isNavOpen} />
        </div>
        <div className="grid-cols-8 mt-20">{children}</div>
      </div>
    </div>
  );
}
