import LocalMusics from "@/components/LocalMusics";
import MusicCard from "@/components/MusicCard";
import Player from "@/components/Player";
import RecentMusic from "@/components/RecentMusic";
// import Banner from "@/components/general/Banner";
import Header from "@/components/general/Header";
import SideBar from "@/components/general/SideBar";
import React from "react";

export default function Home() {
  return (
    <div className="">
      <div className="grid grid-rows-3 grid-cols-6 h-full">
        <SideBar />

        <main className="col-span-5 row-span-3 overflow-auto mb-20 mx-auto w-full">
          <Header />

          {/* <Banner /> */}
          <RecentMusic />

          <LocalMusics />
        </main>
        <Player />
      </div>
    </div>
  );
}
