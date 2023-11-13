import { AudioPlayer } from "@/components/AudioPlayer";
import LocalMusics from "@/components/LocalMusics";
import MusicCard from "@/components/MusicCard";
import Player from "@/components/Player";
import RecentMusic from "@/components/RecentMusic";
import Stories from "@/components/Stories";
// import Banner from "@/components/general/Banner";
import Header from "@/components/general/Header";
import SideBar from "@/components/general/SideBar";
import React from "react";

const audio = {
  url: "https://storage.googleapis.com/media-session/elephants-dream/the-wires.mp3",
  title: "A sample audio title",
  author: "The Elephants Dream",
  thumbnail: "https://images.unsplash.com/photo-1511379938547-c1f69419868d",
};

export default function Home() {
  return (
    <div className="">
      <div className="grid grid-rows-3 grid-cols-4 h-full">
        <SideBar />

        <main className="col-span-3 row-span-2 mb-20 mx-auto w-full">
          <Header />
          <Stories />
          {/* <Banner /> */}
          <RecentMusic />
          <LocalMusics />
        </main>
      </div>
      <AudioPlayer
        url={audio.url}
        title={audio.title}
        author={audio.author}
        thumbnail={audio.thumbnail}
      />
      {/* <Player /> */}
    </div>
  );
}
