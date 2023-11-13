import { AudioPlayer } from "@/components/AudioPlayer";
import LocalMusics from "@/components/LocalMusics";
import MusicCard from "@/components/MusicCard";
import Player from "@/components/Player";
import RecentMusic from "@/components/RecentMusic";
import Stories from "@/components/Stories";
// import Banner from "@/components/general/Banner";
import Header from "@/components/general/Header";
import SideBar from "@/components/general/SideBar";
import React, { useState } from "react";

const audio = {
  url: "https://storage.googleapis.com/media-session/elephants-dream/the-wires.mp3",
  title: "A sample audio title",
  author: "The Elephants Dream",
  thumbnail: "https://images.unsplash.com/photo-1511379938547-c1f69419868d",
};

export default function Home() {
  const [playTrack, setPlayTrack] = useState(false);
  return (
    <div className="mx-auto w-full">
      <div className="w-full mx-auto h-full flex max-w-[1900px]">
        <div className="w-1/6 sticky h-screen">
          <SideBar />
        </div>

        <main className="h-screen overflow-scroll mx-auto w-full px-10">
          <div className="h-full w-full max-w-[1300px]">
          <Header />
          <Stories />
          {/* <Banner /> */}
          <img
            src="/images/banner.jpg"
            className="w-full rounded-lg object-cover h-[400px] mb-10 "
          />
          <RecentMusic />
          <LocalMusics /></div>
        </main>
      </div>
      {playTrack && (
        <AudioPlayer
          url={audio.url}
          title={audio.title}
          author={audio.author}
          thumbnail={audio.thumbnail}
        />
      )}
      {/* <Player /> */}
    </div>
  );
}
