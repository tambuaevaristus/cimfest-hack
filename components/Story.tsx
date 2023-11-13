import Link from "next/link";
import React from "react";

interface Prop {
  img: string;
}
export default function Story({ img }: Prop) {
  return (
    <div>
      <Link href="/story">
        <div className="rounded-full hover:border-red-500 overflow-hidden duration-100 border-yellow-500  border-2 hover:border-4 bg w-[80px] h-[80px]">
          <img src={img} alt="" className="w-full h-full object-cover" />
        </div>
      </Link>
    </div>
  );
}
