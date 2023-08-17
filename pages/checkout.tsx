import CheckoutItem from "@/components/CheckoutItem";
import { RootState } from "@/store";
import React from "react";
import { useSelector } from "react-redux";

export default function Checkout() {
  const commandList = useSelector((state: RootState) => state.file).commands;
  console.log("the list ==>", commandList);

  return (
    <div className="my-5 lg:w-4/5 p-3">
      <h1 className="font-bold text-[30px]">Payment</h1>
      <div className=" py-10 ">
        <div className="bg-white p-10  my-2 rounded-lg">
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
                <p className="text-gray-700 text-2xl font-normal leading-normal">
                  Doc Name
                </p>

                <p className="font-bold">10,000 Fcfa</p>
              </div>
              <div className="flex justify-between py-2">
                <p className="text-gray-700 text-2xl font-normal leading-normal">
                  Doc Name
                </p>

                <p className="font-bold">10,000 Fcfa</p>
              </div>
            </div>
            <hr />

            <div className=" p-2 justify-between items-start flex">
              <div className="text-violet-700 text-[40px] font-bold leading-normal">
                Total
              </div>
              <div className="justify-end items-center gap-2 flex">
                <div className="text-right text-gray-700 text-[32px] font-bold leading-normal">
                  20,000
                </div>
                <div className="text-right text-gray-700 text-2xl font-normal leading-normal">
                  FCFA
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" py-10 w-full">
          <div className="bg-white p-5 my-2 rounded-lg flex justify-between ">
            <div className=" self-stretch justify-start items-center gap-6 flex">
              <div className="justify-start items-start gap-8 flex">
                <div className="flex-col justify-start items-start gap-2 inline-flex">
                  <div className="justify-start items-start gap-8 inline-flex">
                    <div className="h-14 px-4 py-2 bg-neutral-50 rounded-lg border border-violet-700 justify-start items-center gap-2 flex">
                      <div className="p-1 justify-center items-center gap-1 flex">
                        <img
                          className="w-8 h-8"
                          src="https://via.placeholder.com/32x32"
                        />
                        <div className="w-6 h-6 relative" />
                      </div>
                      <div className="grow shrink basis-0 h-10 p-2 justify-start items-start gap-2 flex">
                        <div className="text-center text-violet-700 text-base font-bold leading-normal">
                          650 -669-3055
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch p-2 flex-col justify-start items-start gap-2 inline-flex">
                <div className="w-[134px] grow shrink basis-0 justify-start items-center gap-2 inline-flex">
                  <div className="flex-col justify-center items-center gap-2 inline-flex">
                    <img
                      className="w-12 h-12 border border-stone-300 border-opacity-10"
                      src="https://via.placeholder.com/48x48"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="px-[25px] py-[13px] bg-violet-700 rounded-md shadow justify-center items-center flex">
              <div className="text-white text-2xl font-medium leading-normal">
                Pay Now
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
