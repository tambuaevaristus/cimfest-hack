import { useRouter } from "next/router";
import React, { useState } from "react";

export default function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const router = useRouter();
  return (
    <header className="py-4 mb-6 bg-gray-600 flex items-center justify-between sticky top-0 z-10">
      <div className="flex items-center">
        <button className="h-8 w-8 bg-gray-500 rounded-full text-white flex mr-4 opacity-50 cursor-not-allowed">
          <svg className="h-5 w-5 m-auto" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M15.54 21.15L5.095 12.23 15.54 3.31l.65.76-9.555 8.16 9.555 8.16"
            ></path>
          </svg>
        </button>
        <button className="h-8 w-8 bg-gray-500 rounded-full text-white flex">
          <svg className="h-5 w-5 m-auto" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M7.96 21.15l-.65-.76 9.555-8.16L7.31 4.07l.65-.76 10.445 8.92"
            ></path>
          </svg>
        </button>
      </div>
      <div>
        <button
          onClick={() => {
            setShowMenu(true);
          }}
          className="text-xs relative text-white flex items-center bg-gray-500 rounded-full p-px pr-3"
        >
          <img
            src="/person.png"
            className="w-7 h-7 object-cover rounded-full mr-2"
          />
          Tambua Evaristus
          {showMenu && (
            <div
              onMouseLeave={() => {
                setShowMenu(false);
              }}
              className="rounded-xl bg-white/10 absolute backdrop-blur-3xl p-5 top-10 right-0 w-[300px] flex flex-col gap-2"
            >
              <div className="p-3 rounded-xl text-left hover:bg-white/5">
                Profile
              </div>
              <div
                onClick={() => {
                  router.push("/authentication?screen=signin");
                }}
                className="p-3 rounded-xl text-left hover:bg-white/5"
              >
                Log out
              </div>
            </div>
          )}
        </button>
      </div>
    </header>
  );
}
