import React from "react";

interface Prop {
  img: string;
}
export default function Story({ img }: Prop) {
  return (
    <div>
      <div className="rounded-full overflow-hidden border-red-500  border-2 bg w-[100px] h-[100px]">
        <img src={img} alt="" />
      </div>
    </div>
  );
}
