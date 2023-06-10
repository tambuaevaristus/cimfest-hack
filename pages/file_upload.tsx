import React, { useEffect, useRef, useState } from "react";

export default function Create() {
  const [title, setTitle] = useState("");
  const [city, setCity] = useState("");
  const [venue, setVenue] = useState("");

  const [googleMapLink, setGoogleMapLink] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [phone, setPhone] = useState("");
  const [description, setDescription] = useState("");
  const [refundPolicy, setRefundPolicy] = useState("");

  const [ticketName, setTicketName] = useState("");
  const [ticketPrice, setTicketPrice] = useState("");

  return (
    <div>
      <div className="container mx-auto mt-[65px] gap-2 flex p-5">
        <div className="w-full">
          <div className="w-full rounded-lg bg-white p-5 lg:rounded">
            <h3 className="font-bold text-[20px] pt-4 text-center">
              Upload File
            </h3>
            <div className="mb-4 rounded bg-white px-8 pt-6 pb-8">
              <div className="mb-4 md:flex md:justify-between">
                <div className="md:flex mb-4 md:mr-2 md:mb-0 w-full gap-2">
                  <div className="md:w-3/5">
                    <label className="mb-2 block text-sm font-bold text-gray-700">
                      File Name
                    </label>
                    <input
                      className="border  w-full p-2 rounded-md"
                      type="text"
                      placeholder="Enter File name"
                      onChange={(e) => setTitle(e.target.value)}
                    />
                  </div>
                  <div className="md:w-2/5">
                    <label className="block mb-2 text-sm  font-medium text-gray-900 dark:text-white">
                      Upload file
                    </label>
                    <input
                      className="block w-full text-md py-1 text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                      type="file"
                    />
                    <p
                      className="mt-1 text-sm text-gray-500 dark:text-gray-300"
                      id="file_input_help"
                    >
                      PDF files Only
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid lg:grid-cols-4 gap-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
                <div className="">
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Color Mode
                  </label>
                  <select className="bg-gray-50 border border-gray-300 w-full text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option value="Landscape" selected>
                      Black & White
                    </option>
                    <option value="Potrait">Color</option>
                  </select>
                </div>
                <div className="">
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Orientation
                  </label>
                  <select className="bg-gray-50 border border-gray-300 w-full text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option value="Potrait" selected>
                      Potrait
                    </option>
                    <option value="Landscape">Landscape</option>
                  </select>
                </div>
                <div className="">
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Paper Size
                  </label>
                  <select className="bg-gray-50 border border-gray-300 w-full text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option value="A4" selected>
                      A4
                    </option>
                    <option value="A3">A3</option>
                    <option value="A5">A5</option>
                  </select>
                </div>
                <div className="">
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Two Sided
                  </label>
                  <select className="bg-gray-50 border border-gray-300 w-full text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option value="one sided" selected>
                      One Sided
                    </option>
                    <option value="two sided">Two Sided</option>
                  </select>
                </div>
                <div className="">
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Pages per Side
                  </label>
                  <select className="bg-gray-50 border border-gray-300 w-full text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option value="one page" selected>
                      1 page
                    </option>
                    <option value="two page">2 pages</option>
                  </select>
                </div>
                <div className="">
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Pages Type
                  </label>
                  <select className="bg-gray-50 border border-gray-300 w-full text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option value="normal" selected>
                      Normal
                    </option>
                    <option value="Hard Page">Hard Page</option>
                  </select>
                </div>
                <div className="">
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Pages Color
                  </label>
                  <select className="bg-gray-50 border border-gray-300 w-full text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option value="white" selected>
                      white
                    </option>
                    <option value="Green">Green</option>
                    <option value="Red">Red</option>
                    <option value="Pink">Pink</option>
                  </select>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-bold text-gray-700">
                    Number of Copies
                  </label>
                  <input
                    className="border  w-full p-2 rounded-md"
                    type="number"
                  />
                </div>
              </div>
              <div className="mb-4">
                <label className="mb-2 block text-sm font-bold text-gray-700">
                  Description 
                </label>
                <p></p>
                <textarea
                  cols={30}
                  rows={4}
                  placeholder="Explain any other additional printing information here... (please be detailed as posible)"
                  onChange={(e) => setDescription(e.target.value)}
                  className="focus:shadow-outline mb-3 w-full appearance-none rounded border px-3 py-2 text-sm leading-tight text-gray-700 shadow focus:outline-none"
                ></textarea>
              </div>

              <h2 className="font-bold text-[16px]">Pricing Information</h2>
              
              
            </div>
          </div>
        
        </div>
      </div>
    </div>
  );
}
