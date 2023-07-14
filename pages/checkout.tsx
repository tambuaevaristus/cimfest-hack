import CheckoutItem from "@/components/CheckoutItem";
import React from "react";

export default function checkout() {
  return (
    <div className="my-5">
      <h1 className="font-bold text-[30px]">Payment</h1>
      <div className="bg-white p-10 w-4/5 my-2 rounded-lg">
        <h1 className="font-bold text-[20px]">Select Document</h1>
        <div className="my-2">
          <CheckoutItem />
          <CheckoutItem />
          <CheckoutItem />
          <CheckoutItem />
          <CheckoutItem />
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
