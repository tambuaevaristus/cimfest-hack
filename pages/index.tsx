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
  const [selected, setSelected] = useState("one");
  const router = useRouter().asPath;
  const nav = useRouter();
  return (
    <div className="mx-auto w-full">
      <div className="w-full mx-auto h-full flex max-w-[1900px]">
        <div className="w-1/6 sticky h-screen">
          <SideBar />
        </div>

        {/home/.test(router) && (
          <main className="h-screen overflow-scroll mx-auto w-full px-10">
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
          </main>
        )}
        {/pricing/.test(router) && (
          <main className="h-screen overflow-scroll mx-auto w-full px-10">
            <div className="h-full w-full max-w-[1300px] gap-3">
              <Header />
              <div className="flex gap-3">
                <div className="w-[250px] flex flex-col h-[300px] overflow-hidden rounded-xl bg-white/10">
                  <div className="font-bold text-3xl w-full p-5 text-center py-10 text-white">
                    Free
                    <div className="text-xs font-thin flex flex-col gap-2 border border-white/5 rounded-md p-2">
                      <div>unlimited access for 1 month</div>
                      <div>Can only download Cameroonian songs</div>
                    </div>
                  </div>
                  {selected != "one" && (
                    <button
                      onClick={() => {
                        setSelected("one");
                        nav.push("payment");
                      }}
                      className="mt-auto bg-white/20 p-3 w-full"
                    >
                      Activate
                    </button>
                  )}
                </div>
                <div className="w-[250px] flex flex-col h-[300px] overflow-hidden rounded-xl bg-white/10">
                  <div className="font-bold text-3xl w-full p-5 text-center py-10 text-white">
                    3,000 <span className="text-xs">XAF / Mon</span>
                    <div className="text-xs font-thin flex flex-col gap-2 border border-white/5 rounded-md p-2">
                      <div>unlimited access for 1 month</div>
                      <div>Can only download Cameroonian songs</div>
                    </div>
                  </div>
                  {selected != "two" && (
                    <button
                      onClick={() => {
                        setSelected("two");
                        nav.push("payment");
                      }}
                      className="mt-auto bg-white/20 p-3 w-full"
                    >
                      Activate
                    </button>
                  )}
                </div>
                <div className="w-[250px] flex flex-col h-[300px] overflow-hidden rounded-xl bg-white/10">
                  <div className="font-bold text-3xl w-full p-5 text-center py-10 text-white">
                    5,000 <span className="text-xs">XAF / Mon</span>
                    <div className="text-xs font-thin flex flex-col gap-2 border border-white/5 rounded-md p-2">
                      <div>unlimited access for 1 month</div>
                      <div>Can only download Cameroonian songs</div>
                    </div>
                  </div>
                  {selected != "three" && (
                    <button
                      onClick={() => {
                        setSelected("three");
                        nav.push("payment");
                      }}
                      className="mt-auto bg-white/20 p-3 w-full"
                    >
                      Activate
                    </button>
                  )}
                </div>
              </div>
            </div>
          </main>
        )}
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
