import React from "react";

interface Props {
  name?: string;
  amount?: number;
  pages?: number;
}
export default function CheckoutItem({ name, amount, pages }: Props) {
  return (
    <div className="flex justify-between py-3 border-t">
      <div className="">
        {/* Checkout Item */}
        <p className="text-gray-700 text-2xl font-normal leading-normal">{name}</p>

        <p className=" text-gray-700 text-2xl font-bold leading-loose">{amount}1000 Fcfa</p>
        <p className="text-sm text-gray-500">{pages} Pages | Dec 20,2023</p>
      </div>

      <div className="">
        <input type="checkbox" className="w-5 h-5 rounded-full" name="" id="" />
      </div>
    </div>
  );
}