import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import { useRouter } from "next/router";
import { log } from "console";
import { useSelector } from "react-redux";
import AdminSidebar from "./AdminSidebar";
import { useSession } from "next-auth/react";

export default function Layout({ children }: any) {
  const [isNavOpen, setIsNavOpen] = useState(false); // initiate isNavOpen state with false
  const router = useRouter();
  const session = useSession();
  const user = session?.data?.user;
  console.log(user?.role?.code);

  return (
    <div>
      <Navbar setIsNavOpen={setIsNavOpen} />

      <div className="flex w-full">
        {router.asPath === "/signin" || router.asPath === "/signup" ? (
          <></>
        ) : (
          <div className="lg:w-1/4">
            <Sidebar isNavOpen={isNavOpen} />
          </div>
        )}
        <div className=" container mx-auto mt-[50px]">{children}</div>
      </div>
    </div>
  );
}
