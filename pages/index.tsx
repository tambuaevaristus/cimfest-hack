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
import songs from "@/songs";
import { useRouter } from "next/router";

const audio = {
  url: "https://storage.googleapis.com/media-session/elephants-dream/the-wires.mp3",
  title: "A sample audio title",
  author: "The Elephants Dream",
  thumbnail: "https://images.unsplash.com/photo-1511379938547-c1f69419868d",
};

export default function Home() {
  const [playing, setPlaying] = useState<any>();
  const [songList, setSongList] = useState(songs);
  const router = useRouter()
  return (
    <div className="mx-auto w-full">
      <div className="w-full mx-auto h-full flex max-w-[1900px]">
        <div className="w-1/6 sticky h-screen">
          <SideBar />
        </div>

        {<main className="h-screen overflow-scroll mx-auto w-full px-10">
          <div className="h-full w-full max-w-[1300px]">
            <Header />
            <Stories />
            {/* <Banner /> */}
            <img
              src="/images/banner.jpg"
              className="w-full rounded-xl object-cover h-[400px] mb-10 "
            />
            <RecentMusic setPlaying={setPlaying} songs={songList} />
            <LocalMusics setPlaying={setPlaying} songs={songList} />
          </div>
        </main>}
      </div>
      {playing != undefined && (
        <AudioPlayer
          url={playing?.url}
          title={playing?.title}
          author={playing?.author}
          thumbnail={playing?.thumbnail}
        />
      )}
      {/* <Player /> */}
    </div>
  );
}
