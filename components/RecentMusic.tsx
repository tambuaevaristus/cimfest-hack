import React from "react";
import MusicCard from "./MusicCard";

export default function RecentMusic() {
  return (
    <section className="grid gap-6 mb-8">
      <div className="flex items-center">
        <div className="flex-1">
          <h3 className="text-2xl text-white">
            <a
              className="border-b border-transparent hover:border-white"
              href=""
            >
              Recently played
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
        <MusicCard
          image="https://picsum.photos/129.webp?random=1"
          title="Afro gospel"
        />
        <MusicCard
          image="https://www.musicinafrica.net/sites/default/files/styles/article_slider_large/public/images/article/201908/mrleo01.jpg?itok=560Modaz"
          title="Mr Leo"
        />
        <MusicCard
          image="data:image/jpeg;base64,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"
          title="Daphne"
        />
        <MusicCard
          image="https://www.bidhaar.com/wp-content/uploads/2020/11/mani-bella.jpg"
          title="Bither"
        />
      </div>
    </section>
  );
}
