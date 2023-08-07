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
        <p>{name}</p>

        <p className="font-bold">{amount} Fcfa</p>
        <p className="text-sm text-gray-500">{pages} Pages | Dec 20,2023</p>
      </div>

      <div className="">
        <input type="checkbox" name="" id="" />
      </div>
    </div>
  );
}
