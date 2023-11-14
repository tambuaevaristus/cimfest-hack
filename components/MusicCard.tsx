import React, { useState } from "react";
import { CiPlay1 } from "react-icons/ci";
import { ImDownload, ImPlay } from "react-icons/im";
interface Props {
  image: string;
  title: string;
  local?: boolean;
  onClick?: any;
}

export default function MusicCard({ image, local, title, onClick }: Props) {
  const [modal, setModal] = useState(false);
  return (
    <div className="rounded-lg max-w-[250px] min-w-[250px] hover:bg-white/5 duration-150 p-2">
      <div className="relative card">
        <img
          className="image w-full hover:scale-95 h-[250px] duration-150 object-cover rounded-xl inset-0"
          src={image}
          alt=""
        />
        <div className="w-full top-0 over gap-3 opacity-0 left-0 rounded-xl absolute h-full bg-black/50 flex items-center justify-center">
          <CiPlay1
            onClick={() => {
              onClick();
            }}
            className="bg-white cursor-pointer hover:scale-110 duration-200 w-10 h-10 p-2 rounded-full"
          />
          <ImDownload
            onClick={() => {
              if (local) {
              } else {
                setModal(true);
              }
            }}
            className="bg-white cursor-pointer hover:scale-110 duration-200 w-10 h-10 p-2 rounded-full"
          />
        </div>
      </div>

      <div className="text-center text-white text-line-clamp-1  mb-1 block">
        {title}
      </div>
      <div className=" pb-5"></div>
      {modal && (
        <div className="absolute top-0 left-0 w-full h-screen bg-black/10 z-50 flex items-center justify-center">
          <div
            onMouseLeave={() => {
              setModal(false);
            }}
            className="bg-white w-full flex-col gap-4 max-w-[400px] h-[250px] flex items-center justify-center p-4 rounded-xl"
          >
            Sorry this Feature is not available for your current. Plan. Upgrade and continue.
            <button
              onClick={() => {
                setModal(false);
              }}
              className="bg-black/10 rounded-xl p-3 px-8"
            >
              OK
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
