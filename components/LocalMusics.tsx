import React from "react";
import MusicCard from "./MusicCard";

export default function LocalMusics() {
  return (
    <section className="px-6 grid gap-6 mb-8">
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
      <div className="grid  grid-cols-1 sm:grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
        <MusicCard />
        <MusicCard />
        <MusicCard />
        <MusicCard />
        <MusicCard />
      </div>
    </section>
  );
}
