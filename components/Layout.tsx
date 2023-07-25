import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import { useRouter } from "next/router";
import { log } from "console";
import { useSelector } from "react-redux";

export default function Layout({ children }: any) {
  const [isNavOpen, setIsNavOpen] = useState(false); // initiate isNavOpen state with false
  const router = useRouter();
  
  return (
    <div>
      <Navbar setIsNavOpen={setIsNavOpen} />

      <div className="flex w-full">
        {router.asPath === "/signin" || router.asPath === "/signup" ? (
          <></>
        ) : (
          <div className="lg:w-1/5 bg-slate-500">
            <Sidebar isNavOpen={isNavOpen} />
          </div>
        )}
        <div className=" container mx-auto pr-5 mt-[50px]">{children}</div>
      </div>
    </div>
  );
}
