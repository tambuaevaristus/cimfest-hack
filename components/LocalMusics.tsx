import React from "react";
import MusicCard from "./MusicCard";

export default function LocalMusics({ songs, setPlaying }: any) {
  const songz = songs;
  return (
    <section className="grid gap-6 mb-8">
      <div className="flex items-center">
        <div className="flex-1">
          <h3 className="text-2xl text-white">
            <a
              className="border-b border-transparent hover:border-white"
              href=""
            >
              Local Musics
            </a>
          </h3>
        </div>
        <div>
          <a
            className="text-xs text-gray-100 tracking-widest uppercase hover:underline"
            href=""
          >
            See all
          </a>
        </div>
      </div>
      <div className="flex gap-3 overflow-scroll">
        {songz.map((elem: any, index: any) => (
          <MusicCard
            onClick={() => {
              setPlaying({
                url: elem?.url,
                title: elem?.title,
                author: elem?.artist,
                thumbnail: elem?.image,
              });
            }}
            key={index}
            image={elem?.image}
            title={elem?.title}
          />
        ))}
      </div>
    </section>
  );
}
