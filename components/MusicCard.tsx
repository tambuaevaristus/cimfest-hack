import React from "react";
interface Props {
    image: string,
    title: string
}

export default function MusicCard({image, title}:Props) {
  return (
    <div className="rounded-lg p-2">
      <div className="relative pt-full mb-4">
        <img
          className="block w-full rounded-xl absolute inset-0"
          src={image}
          alt=""
        />
      </div>
      <div className="text-center text-white text-line-clamp-1  mb-1 block">
        {title}
      </div>
      <div className="relative pb-5">
        <span className="text-xs text-center text-gray-100 text-line-clamp-1">
          By Big G Baba
        </span>
        {/* <button className="absolute right-0 top-0 w-10 h-10 bg-green-200 rounded-full text-white">
          <svg
            className="fill-current h-5 w-5 m-auto"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M5 4h3v12H5V4zm7 0h3v12h-3V4z" />
          </svg>
        </button> */}
      </div>
    </div>
  );
}
