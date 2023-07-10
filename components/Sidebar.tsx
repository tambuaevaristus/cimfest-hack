import React, { useState } from "react";
import { BiHelpCircle, BiHome, BiLogOut, BiUser } from "react-icons/bi";

import { BsCreditCard2Front } from "react-icons/bs";
import Navbar from "./Navbar";
import Link from "next/link";
import userSlice from "@/slice/userSlice";
import { RootState } from "@/store";
import { useSelector } from "react-redux";
import { signOut } from "next-auth/react";

export default function Sidebar({ isNavOpen }: any) {
  const userInfo = useSelector((state: RootState) => state.user);
  return (
    <div>
      <div className={isNavOpen ? "block lg:block" : "lg:block hidden"}>
        <div className="fixed left-0 mt-[60px] z-20 p-5 h-screen overflow-y-auto bg-white md:block">
          <div className="py-4 text-gray-500 dark:text-gray-400">
            <div className="flex justify-center items-center flex-col">
              <div className="bg-gray-300 w-32 h-32 rounded-full overflow-hidden">
                <img
                  src={
                    userInfo?.userData?.image
                      ? userInfo?.userData?.image
                      : "profileImage"
                  }
                  alt="Profile Image"
                  className="w-full h-full object-cover"
                />
              </div>
              <h2 className="text-xl font-bold mt-4">
                {userInfo.userData?.name}
              </h2>
              <p className="text-gray-600 mt-2">{userInfo.userData?.email}</p>
              <p className="text-gray-600">+237676814364</p>
            </div>
            <ul className="mt-6">
              <li className="relative px-6 py-3">
                <span
                  className="absolute inset-y-0 left-0 w-1 bg-purple-600 rounded-tr-lg rounded-br-lg"
                  aria-hidden="true"
                ></span>
                <Link
                  className="inline-flex items-center w-full text-sm font-semibold text-gray-800 transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200 dark:text-gray-100"
                  href="/"
                >
                  <BiHome size={20} />

                  <span className="ml-4">Dashboard</span>
                </Link>
              </li>
            </ul>
            <ul>
              <li className="relative px-6 py-3">
                <Link
                  className="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
                  href="/profile"
                >
                  <BiUser size={20} />
                  <span className="ml-4">Profile</span>
                </Link>
              </li>
              <li className="relative px-6 py-3">
                <Link
                  className="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
                  href="cards.html"
                >
                  <BsCreditCard2Front size={20} />
                  <span className="ml-4">Billing</span>
                </Link>
              </li>
              <li className="relative px-6 py-3">
                <a
                  className="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
                  href="charts.html"
                >
                  <BiHelpCircle size={20} />
                  <span className="ml-4">Help</span>
                </a>
              </li>
              <li className="relative px-6 py-3">
                <a
                  className="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
                  href="charts.html"
                >
                  <BiHelpCircle size={20} />
                  <span className="ml-4">Setting</span>
                </a>
              </li>{" "}
              <li className="relative px-6 py-3">
                {/* <Link
                  className="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
                  href="signin"
                > */}
                <BiLogOut size={20} />
                <span className="ml-4" onClick={() => signOut()}>
                  Logout
                </span>
                {/* </Link> */}
              </li>
            </ul>
            {/* <div className="px-6 my-6">
            <button className="flex items-center justify-between w-full px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple">
              Create account
              <span className="ml-2" aria-hidden="true">
                +
              </span>
            </button>
          </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
