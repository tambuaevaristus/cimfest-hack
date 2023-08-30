import React, { useEffect, useState } from "react";
import OrderItem from "./OrderItem";
import Link from "next/link";
import { Command } from "@/types";
import { isError, useQuery } from "@tanstack/react-query";
import { useOrderData } from "@/hooks/useOrderData";

export default function OrderList() {
  // const [orders, setOrders] = useState<[Command]>();
  const { isLoading, data, error, isError } = useOrderData();

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (isError) {
    return <h2>Server Error try refreshing</h2>;
  }

  return (
    <div>
      <div className="w-full overflow-hidden rounded-lg shadow-xs">
        <div className="my-3">
          <div className=" h-28 flex-col justify-center items-start gap-4 inline-flex">
            <div className="self-stretch h-12 flex-col justify-start items-start gap-1 flex">
              <div className="text-gray-700 text-xl font-bold leading-7">
                Order Summary
              </div>
              <div className="text-gray-700 text-sm font-normal">
                An overview of all print order and their details.
              </div>
            </div>
            <div className="self-stretch justify-between items-center gap-4 inline-flex">
              <div className=" self-stretch justify-start items-center gap-2 flex">
                <div className=" self-stretch pl-[17px] pr-[13px] py-[9px] bg-white rounded-md shadow border border-zinc-100 justify-center items-center gap-2 flex">
                  <div className="text-gray-700 text-sm font-normal leading-tight">
                    Bulk actions
                  </div>
                  <div className="w-5 h-5 relative" />
                </div>
                <div className="px-4 py-1.5 bg-white rounded-md shadow border border-neutral-50 justify-center items-center gap-2 flex">
                  <div className="text-gray-700 text-sm font-medium leading-tight">
                    Apply
                  </div>
                </div>
              </div>
              <div className="justify-start items-start gap-4 flex">
                <div className="justify-start items-start gap-2 flex">
                  <div className="w-5 h-5 relative" />
                  <input
                    className="w-[389px] h-12 px-4 py-2 bg-white rounded-lg border justify-start items-center gap-4 flex"
                    placeholder="Search"
                  />
                </div>

                <button className="px-4 py-3 bg-white rounded-lg justify-center items-center gap-2 flex">
                  Export to CSV
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full overflow-x-auto">
          <table className="w-full whitespace-no-wrap">
            <thead>
              <tr className="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b bg-gray-50 dark:text-gray-400 dark:bg-gray-800">
                <th className="px-4 py-3"></th>
                <th className="px-4 py-3">Client Name</th>
                {/* <th className="px-4 py-3">Description</th> */}
                <th className="px-4 py-3">Order Date</th>
                <th className="px-4 py-3">Status</th>
                <th className="px-4 py-3">Type</th>
                <th className="px-4 py-3">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y">
              {data?.data?.data?.map((order: any) => (
                <OrderItem key={order._id} data={data?.data?.data} />
              ))}
            </tbody>
          </table>
        </div>
        <div className="grid px-4 py-3 text-xs font-semibold tracking-wide text-gray-500 uppercase border-t dark:border-gray-700 bg-gray-50 sm:grid-cols-9 dark:text-gray-400 dark:bg-gray-800">
          <span className="flex items-center col-span-3">
            Showing 21-30 of 100
          </span>
          <span className="col-span-2"></span>
          <span className="flex col-span-4 mt-2 sm:mt-auto sm:justify-end">
            <nav aria-label="Table navigation">
              <ul className="inline-flex items-center">
                <li>
                  <button
                    className="px-3 py-1 rounded-md rounded-l-lg focus:outline-none focus:shadow-outline-purple"
                    aria-label="Previous"
                  ></button>
                </li>
                <li>
                  <button className="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple">
                    1
                  </button>
                </li>
                <li>
                  <button className="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple">
                    2
                  </button>
                </li>
                <li>
                  <button className="px-3 py-1 text-white transition-colors duration-150 bg-purple-600 border border-r-0 border-purple-600 rounded-md focus:outline-none focus:shadow-outline-purple">
                    3
                  </button>
                </li>
                <li>
                  <button className="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple">
                    4
                  </button>
                </li>
                <li>
                  <span className="px-3 py-1">...</span>
                </li>
                <li>
                  <button className="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple">
                    8
                  </button>
                </li>
            
                <li>
                  <button
                    className="px-3 py-1 rounded-md rounded-r-lg focus:outline-none focus:shadow-outline-purple"
                    aria-label="Next"
                  ></button>
                </li>
              </ul>
            </nav>
          </span>
        </div>
      </div>
    </div>
  );
}
