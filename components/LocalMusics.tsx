import React from "react";
import MusicCard from "./MusicCard";

export default function LocalMusics() {
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
      <div className="grid  grid-cols-1 sm:grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
        <MusicCard
          image="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.facebook.com%2F237Showbiz%2Fposts%2Fend-of-year-mutumbu-pkoyo-from-lionn-productionsmr-leo-x-gomez-x-kameni-20th-dec%2F1246803425511322%2F&psig=AOvVaw0sTiMtSrqsAXGYYZ1FVtI8&ust=1699961109611000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCOCG5uruwIIDFQAAAAAdAAAAABAE"
          title="Mr Leo"
        />
        <MusicCard
          image="https://picsum.photos/129.webp?random=1"
          title="Afro gospel"
        />
        <MusicCard
          image="https://www.google.com/url?sa=i&url=https%3A%2F%2F237showbiz.com%2Fnews%2Ftop-10-most-followed-cameroonian-artists-on-social-media-2023%2F&psig=AOvVaw254xabipGUk_9f3MfbmXnJ&ust=1699969124790000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCIDttdCMwYIDFQAAAAAdAAAAABAE"
          title="Ko C"
        />
      </div>
    </section>
  );
}
