import CheckoutItem from "@/components/CheckoutItem";
import { RootState } from "@/store";
import React from "react";
import { useSelector } from "react-redux";

export default function Checkout() {
  const commandList = useSelector((state: RootState) => state.file).commands;
  console.log("the list ==>", commandList);

  return (
    <div className="my-5">
      <h1 className="font-bold text-[30px]">Payment</h1>
      <div className="bg-white p-10 w-4/5 my-2 rounded-lg">
        <h1 className="font-bold text-[20px]">Select Document</h1>
        <div className="my-2">
          {commandList?.map((command, key) => (
            <CheckoutItem
              key={key}
              name={command.docName}
              amount={command.cost}
              pages={30}
            />
          ))}
        </div>
        <div className="my-4">
          <h1 className="font-bold text-[30px]">Order Summary</h1>

          <div className="py-3 border-t">
            <div className="flex justify-between py-2">
              <p>Doc Name</p>

              <p className="font-bold">10,000 Fcfa</p>
            </div>
            <div className="flex justify-between py-2">
              <p>Doc Name</p>

              <p className="font-bold">10,000 Fcfa</p>
            </div>
          </div>
        </div>
        <div className="flex justify-between border-t py-2">
          <p>Total</p>

          <p className="font-bold">10,000 Fcfa</p>
        </div>
      </div>
    </div>
  );
}
