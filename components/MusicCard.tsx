import React from "react";
interface Props {
  image: string;
  title: string;
}

export default function MusicCard({ image, title }: Props) {
  return (
    <div className="rounded-lg max-w-[250px] min-w-[250px] hover:bg-white/5 cursor-pointer duration-150 p-2">
      <img
        className=" w-full hover:scale-95 h-[250px] duration-150 object-cover rounded-xl inset-0"
        src={image}
        alt=""
      />
      <div className="text-center text-white text-line-clamp-1  mb-1 block">
        {title}
      </div>
      <div className=" pb-5">
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