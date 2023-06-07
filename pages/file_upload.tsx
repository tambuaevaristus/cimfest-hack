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
      <div className="container mx-auto mt-5">
        <div className="flex w-full gap-3">
          <div className="w-full rounded-lg bg-white p-5 lg:w-8/12 lg:rounded-l-none">
            <h3 className="header1-bold pt-4 text-center">Create Event</h3>
            <div className="mb-4 rounded bg-white px-8 pt-6 pb-8">
              <div className="mb-4 md:flex md:justify-between">
                <div className="mb-4 md:mr-2 md:mb-0 lg:w-3/5">
                  <label className="mb-2 block text-sm font-bold text-gray-700">
                    Title
                  </label>
                  <input
                    className="input-validated w-full"
                    type="text"
                    placeholder="Enter Event Title"
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>
                <div className="md:ml-2 lg:w-2/5">
                  <label className="mb-2 block text-sm font-bold text-gray-700">
                    City
                  </label>
                  <input
                    className="input-validated w-full"
                    type="text"
                    placeholder="City"
                    onChange={(e) => setCity(e.target.value)}
                  />
                </div>
              </div>

              <div className="mb-4 md:flex md:justify-between">
                <div className="mb-4 md:mr-2 md:mb-0 lg:w-2/6">
                  <label className="mb-2 block text-sm font-bold text-gray-700">
                    Venue
                  </label>
                  <input
                    className="input-validated w-full"
                    type="text"
                    placeholder="Enter Event Venue"
                    onChange={(e) => setVenue(e.target.value)}
                  />
                </div>
                <div className="mb-4 md:mr-2 md:mb-0 lg:w-2/6">
                  <label className="mb-2 block text-sm font-bold text-gray-700">
                    Date
                  </label>
                  <input
                    className="input-validated w-full"
                    type="date"
                    onChange={(e) => setDate(e.target.value)}
                  />
                </div>
                <div className="mb-4 md:mr-2 md:mb-0 lg:w-2/6">
                  <label className="mb-2 block text-sm font-bold text-gray-700">
                    Time
                  </label>
                  <input
                    className="input-validated w-full"
                    type="time"
                    placeholder="Enter Event Time"
                    onChange={(e) => setTime(e.target.value)}
                  />
                </div>
              </div>
              <div className="mb-4 md:flex md:justify-between">
                <div className="mb-4 w-full md:mr-2 md:mb-0">
                  <label className="mb-2 block text-sm font-bold text-gray-700">
                    Google Map Link
                  </label>
                  <input
                    className="input-validated w-full"
                    type="text"
                    placeholder="Enter google map link"
                    onChange={(e) => setGoogleMapLink(e.target.value)}
                  />
                </div>
              </div>
              <div className="mb-4">
                <label className="mb-2 block text-sm font-bold text-gray-700">
                  Description
                </label>
                {/* <textarea
                  cols={30}
                  rows={10}
                  onChange={(e) => setDescription(e.target.value)}
                  className="focus:shadow-outline mb-3 w-full appearance-none rounded border px-3 py-2 text-sm leading-tight text-gray-700 shadow focus:outline-none"
                ></textarea> */}
              </div>
              <div className="mb-4">
                <label className="mb-2 block text-sm font-bold text-gray-700">
                  Refund Policy
                </label>
                <textarea
                  cols={30}
                  rows={5}
                  onChange={(e) => setRefundPolicy(e.target.value)}
                  className="focus:shadow-outline mb-3 w-full appearance-none rounded border px-3 py-2 text-sm leading-tight text-gray-700 shadow focus:outline-none"
                ></textarea>
              </div>

              <div className="mb-4 md:mr-2 md:mb-0 lg:w-2/6">
                <label className="mb-2 block text-sm font-bold text-gray-700">
                  Organizer Contact
                </label>
                <input
                  className="input-validated w-full"
                  type="text"
                  placeholder="Enter organization contact"
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              <div className="my-4 flex justify-end text-center">
                <button className="btn-active ">
                  Create Event
                </button>
              </div>
            </div>
          </div>
          <div className="hidden h-auto w-full rounded-l-lg bg-white bg-cover p-4 lg:block lg:w-4/12">
            <div>
              <input
                type="file"
                name="image"
                className="input-validated my-4 w-full"
              />
            </div>

            <div>
              <h1 className="header2-bold pt-2">Enter Tickets</h1>

              <div className="flex gap-1">
                <div className="w-3/5">
                  <label className="mb-2 block text-sm font-bold text-gray-700">
                    Ticket Name
                  </label>
                  <input
                    className="input-validated w-full"
                    type="text"
                    placeholder="Enter ticket name"
                    onChange={(e) => setTicketName(e.target.value)}
                  />
                </div>
                <div className="w-2/5">
                  <label className="mb-2 block text-sm font-bold text-gray-700">
                    Price
                  </label>
                  <input
                    className="input-validated w-full"
                    type="text"
                    placeholder="Enter price"
                    onChange={(e) => setTicketPrice(e.target.value)}
                  />
                </div>
              </div>
              <div className="my-4 flex justify-end text-center"></div>

              <div className="">
                {/* {tickets ? ( */}
                <table className="w-full text-left text-sm text-gray-500 dark:text-gray-400">
                  <tbody className="container">
                    <tr>
                      <td>Name</td>
                      <td>Price</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
