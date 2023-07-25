import React from "react";
import Link from "next/link";
import OrderItem from "./OrderItem";

export default function OrderList() {
  return (
    <div>
      <div className="w-full overflow-hidden rounded-lg shadow-xs">
      <Link href="/file_upload" className="bg-blue-500 float-right p-3 text-white rounded-lg mb-4">Place Command</Link>

        <div className="w-full overflow-x-auto">
          <table className="w-full whitespace-no-wrap">
            <thead>
              <tr className="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b bg-gray-50 dark:text-gray-400 dark:bg-gray-800">
                {/* <th className="px-4 py-3"></th> */}
                <th className="px-4 py-3">User</th>
                <th className="px-4 py-3">File name</th>
                <th className="px-4 py-3">Cost</th>
                <th className="px-4 py-3">Date Send</th>
                <th className="px-4 py-3">Status</th>
                <th className="px-4 py-3">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y">
             
             <OrderItem />
             <OrderItem />
             <OrderItem />
             <OrderItem />
             <OrderItem />
             <OrderItem />
             <OrderItem />
            </tbody>
          </table>
        </div>
        
      </div>
    </div>
  );
}
