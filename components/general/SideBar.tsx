import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { CiHome, CiMoneyBill, CiMoneyCheck1 } from "react-icons/ci";
import { ImBooks, ImHome, ImLibrary, ImSearch } from "react-icons/im";

export default function SideBar() {
  const router = useRouter();
  return (
    <nav className=" bg-gray-700 pt-6 h-full hidden md:block">
      <div className="mx-auto my-6 cursor-pointer pb-5">
        <img src="/icon.png" className="mx-auto w-32" />
      </div>
      <div className="px-2 mb-6">
        <div
          onClick={() => {
            router.push("?tab=home");
          }}
          className=" hover:bg-white/5 flex font-medium items-center px-4 gap-4 py-3 cursor-pointer duration-150 rounded text-sm text-white"
        >
          <ImHome className="h-6 w-6" />
          Home
        </div>
        <div
          onClick={() => {
            router.push("?tab=search");
          }}
          className="flex font-medium hover:bg-white/5 gap-4 items-center px-4 py-3 cursor-pointer duration-150 rounded text-sm text-gray-100 hover:text-white"
        >
          <ImSearch className="h-6 w-6" />
          Search
        </div>
        <div
          onClick={() => {
            router.push("?tab=downloads");
          }}
          className="flex font-medium hover:bg-white/5 items-center gap-4 px-4 py-3 cursor-pointer duration-150 rounded text-sm text-gray-100 hover:text-white"
        >
          <ImBooks className="h-6 w-6" />
          Downloads
        </div>
      </div>
      <div>
        <h3 className="text-xs uppercase text-white/40 px-6 tracking-widest font-light mb-4">
          Features
        </h3>
        <div className="mb-3">
          <div
            onClick={() => {
              router.push("?tab=create-playlist");
            }}
            className="px-6 hover:bg-white/5 py-2 cursor-pointer flex items-center text-sm text-white opacity-50 hover:opacity-100"
          >
            <svg
              className="bg-white fill-current h-8 mr-4 p-1 text-black w-8"
              shapeRendering="crispEdges"
              viewBox="0 0 36 36"
            >
              <path d="m28 20h-8v8h-4v-8h-8v-4h8v-8h4v8h8v4z"></path>
            </svg>
            Create Playlist
          </div>
          <div
            onClick={() => {
              router.push("?tab=trending");
            }}
            className="px-6 hover:bg-white/5 py-2 cursor-pointer flex items-center text-sm text-white opacity-50 hover:opacity-100"
          >
            <svg
              className="bg-liked-songs fill-current h-8 mr-4 p-2 w-8"
              viewBox="0 0 20 20"
            >
              <path d="M10 3.22l-.61-.6a5.5 5.5 0 0 0-7.78 7.77L10 18.78l8.39-8.4a5.5 5.5 0 0 0-7.78-7.77l-.61.61z" />
            </svg>
            Trending
          </div>
        </div>
        <hr className="border-gray-200 mx-6 mb-3" />
        <div className="mb-3">
          <Link href="/payment">
          <div
            onClick={() => {
              router.push("?tab=pricing");
            }}
            className="px-6 hover:bg-white/5 py-2 gap-3 cursor-pointer flex items-center text-sm text-white opacity-50 hover:opacity-100"
          >
            <CiMoneyCheck1 className="h-9 w-9" />
            Pricing
          </div>
         </Link>
        </div>
        <div>
          {/* <div className="px-6 py-2 flex items-center text-sm text-white text-gray-100 hover:text-white">
            Liked from Radio
          </div>
          <div className="px-6 py-2 flex items-center text-sm text-white text-gray-100 hover:text-white">
            Discover Weekly
          </div> */}
        </div>
      </div>
    </nav>
  );
}
