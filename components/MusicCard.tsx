import React from "react";

export default function MusicCard() {
  return (
    <div className="bg-gray-200 rounded-lg p-5">
      <div className="relative pt-full mb-4">
        <img
          className="block w-full absolute inset-0"
          src="https://picsum.photos/129.webp?random=1"
          alt=""
        />
      </div>
      <div className="text-sm text-white text-line-clamp-1 mb-1 block">
        Fowl
      </div>
      <div className="relative pb-5">
        <span className="text-xs text-gray-100 text-line-clamp-1">
          By Big G Baba
        </span>
        <button className="absolute right-0 top-0 w-10 h-10 bg-green-200 rounded-full text-white">
          <svg
            className="fill-current h-5 w-5 m-auto"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M5 4h3v12H5V4zm7 0h3v12h-3V4z" />
          </svg>
        </button>
      </div>
    </div>
  );
}
