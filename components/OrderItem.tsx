import React from "react";

export default function OrderItem() {
  return (
    
      <tr className="text-gray-700 dark:text-gray-400">
        <td className="px-3">
          <input type="checkbox" name="" id="" />
        </td>
        <td className="px-4 py-3">
          <div className="flex items-center text-sm">
            <div className="relative hidden w-8 h-8 mr-3 rounded-full md:block">
              <img
                className="object-cover w-full h-full"
                src="/file.jpg"
                alt=""
                loading="lazy"
              />
              <div
                className="absolute inset-0 rounded-full shadow-inner"
                aria-hidden="true"
              ></div>
            </div>
            <div>
              <p className="font-semibold">Physics Handout 101n</p>
             
            </div>
          </div>
        </td>
        <td className="px-4 py-3 text-sm">Physics second semester handout </td>
        <td className="px-4 py-3 text-sm">6/10/2020</td>
        <td className="px-4 py-3 text-xs">
          <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-full dark:bg-green-700 dark:text-green-100">
            Printed
          </span>
        </td>
        <td>
            <div className="flex justify-around">
                <button className="text-blue-500">
                    Edit
                </button>
                <button className="text-red-500">
                    Delete
                </button>

            </div>
        </td>
      </tr>
    
  );
}
