import React, { useState } from "react";
import { BiHelpCircle, BiHome, BiLogOut, BiUser } from "react-icons/bi";

import { BsCreditCard2Front } from "react-icons/bs";
import Navbar from "./Navbar";
import Link from "next/link";
// import userSlice from "@/slice/userSlice";
import { useSelector } from "react-redux";
import { signOut } from "next-auth/react";
import { RootState } from "@/store";

export default function AdminSidebar({ isNavOpen }: any) {
  const userInfo = useSelector((state: RootState) => state.user);
  const role: string = "admin";
  return (
    <div>
      <div className={isNavOpen ? "block lg:block" : "lg:block hidden"}>
        <div className="max-w-[264px] bg-white h-screen pt-5 pb-4 flex-col justify-start items-start gap-5 inline-flex">
          <div className="self-stretch h-8 px-4 flex-col justify-start items-start flex">
            <div className="w-[143px] h-8 relative" />
          </div>
          <div className="h-[231px] flex-col justify-start items-center flex">
            <div className="self-stretch h-px bg-gray-200" />
            <div className="self-stretch px-4 pt-6 pb-2 justify-center items-center inline-flex">
              <div className="flex-col justify-center items-center gap-3 inline-flex">
                <img
                  className="w-[122px] h-[122px] rounded-[100px]"
                  src="https://via.placeholder.com/122x122"
                />
                <div className="flex-col justify-center items-center flex">
                  <div className="text-gray-700 text-base font-medium leading-normal">
                    Tambua Evaritus
                  </div>
                  <div className="text-zinc-500 text-sm font-medium leading-tight">
                    676814364
                  </div>
                  <div className="text-zinc-500 text-sm font-medium leading-tight">
                    evaristustambua@gmail.com
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
          </div>
        </div>
      </div>
    </div>
  );
}
