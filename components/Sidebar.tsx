import React, { useState } from "react";
import { BiHelpCircle, BiHome, BiLogOut, BiUser } from "react-icons/bi";

import { BsCreditCard2Front } from "react-icons/bs";
import Navbar from "./Navbar";
import Link from "next/link";
// import userSlice from "@/slice/userSlice";
import { useSelector } from "react-redux";
import { signOut, useSession } from "next-auth/react";
import { RootState } from "@/store";
import Image from "next/image";

export default function Sidebar({ isNavOpen }: any) {
  const session = useSession();
  const user = session?.data?.user;
  return (
    <div>
      <div className="">
        <div className={isNavOpen ? "block lg:block" : "lg:block hidden"}>
          <div className="max-w-[264px] bg-white h-screen fixed overflow-y-scroll scrollbar-none pt-5 pb-4 flex-col justify-start items-start gap-5 inline-flex">
            <div className="self-stretch h-8 px-4 flex-col justify-start items-start flex">
              <div className="w-[143px] relative" />
            </div>
            <div className=" flex-col justify-start items-center flex">
              <div className="self-stretch bg-gray-200" />
              <div className="self-stretch px-4  pb-2 justify-center items-center inline-flex">
                <div className="flex-col justify-center items-center gap-2 inline-flex">
                  <img
                    className="w-[100px] h-[100px] rounded-[100px]"
                    // src={user.image}
                    alt="Profile"
                  />
                  <div className="flex-col justify-center items-center flex">
                    <div className="text-gray-700 text-base font-medium leading-normal">
                      {user?.name}
                    </div>
                    <div className="text-zinc-500 text-sm font-medium leading-tight">
                      676814364
                    </div>
                    <div className="text-zinc-500 text-sm font-medium leading-tight">
                      {user?.email}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch grow shrink basis-0 px-6 flex-col justify-start items-start gap-1 flex">
              <div className="w-full justify-start items-start inline-flex">
                <div className="w-full self-stretch p-4 pr-8 hover:bg-violet-200 rounded-md justify-between items-center gap-[105px] flex">
                  <div className="grow shrink basis-0 h-6 justify-start items-center gap-3 flex">
                    <div className="w-6 h-6 relative" />
                    <Link href="/">
                      <div className="grow shrink basis-0 text-zinc-500 text-base font-normal leading-tight">
                        Dashboard
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="w-full justify-start items-start inline-flex">
                <div className="w-full self-stretch p-4 pr-8 hover:bg-violet-200 rounded-md justify-between items-center gap-[105px] flex">
                  <div className="grow shrink basis-0 h-6 justify-start items-center gap-3 flex">
                    <div className="w-6 h-6 relative" />
                    <Link href="/profile">
                      <div className="grow shrink basis-0 text-zinc-500 text-base font-normal leading-tight">
                        Profile
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
              {/* {user?.role?.code == "admin" ? ( */}
              {"admin" == "admin" ? (
                <div className="w-full justify-start items-start inline-flex">
                  <div className="w-full self-stretch p-4 pr-8 hover:bg-violet-200 rounded-md justify-between items-center gap-[105px] flex">
                    <div className="grow shrink basis-0 h-6 justify-start items-center gap-3 flex">
                      <div className="w-6 h-6 relative" />
                      <Link href="/customers">
                        <div className="grow shrink basis-0 text-zinc-500 text-base font-normal leading-tight">
                          Customers
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="w-full justify-start items-start inline-flex">
                  <div className="w-full self-stretch p-4 pr-8 hover:bg-violet-200 rounded-md justify-between items-center gap-[105px] flex">
                    <div className="grow shrink basis-0 h-6 justify-start items-center gap-3 flex">
                      <div className="w-6 h-6 relative" />
                      <Link href="/customers">
                        <div className="grow shrink basis-0 text-zinc-500 text-base font-normal leading-tight">
                          Billing
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              )}
              <div className="w-full justify-start items-start inline-flex">
                <div className="w-full self-stretch p-4 pr-8 hover:bg-violet-200 rounded-md justify-between items-center gap-[105px] flex">
                  <div className="grow shrink basis-0 h-6 justify-start items-center gap-3 flex">
                    <div className="w-6 h-6 relative" />
                    <Link href="/">
                      <div className="grow shrink basis-0 text-zinc-500 text-base font-normal leading-tight">
                        Settings
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
              {/* sidebar issues */}

              <div className="justify-start items-start inline-flex">
                <div className="self-stretch p-4 rounded-md justify-between items-center gap-[105px] flex">
                  <div className="grow shrink basis-0 h-6 justify-start items-center gap-3 flex">
                    <div className="w-6 h-6 relative" />
                    <div className="grow shrink basis-0 text-zinc-500 text-base font-normal leading-tight">
                      Help
                    </div>
                  </div>
                </div>
              </div>
              <div className="justify-start items-start inline-flex">
                <div className="self-stretch p-4 rounded-md justify-between items-center gap-[105px] flex">
                  <div className="grow shrink basis-0 h-6 justify-start items-center gap-3 flex">
                    <div className="w-6 h-6 relative" />
                    <button onClick={() => signOut()}>
                      <div className="grow shrink basis-0 text-zinc-500 text-base font-normal leading-tight">
                        Logout
                      </div>
                    </button>
                  </div>
                </div>
              </div>
              {/* comment */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
