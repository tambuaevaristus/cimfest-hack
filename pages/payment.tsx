import { useRouter } from "next/router";
import { useState } from "react";
import PhoneInput, { isPossiblePhoneNumber } from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { E164Number } from "libphonenumber-js/min";

const PaymentScreen = () => {
  const router = useRouter();
  const [tab, setTab] = useState("details");
  const [phoneNumber, setPhoneNumber] = useState<E164Number | undefined>("");
  return (
    <div className="w-full h-screen flex items-center justify-center p-4">
      <div className="p-4 rounded-xl justify-start bg-white/5 max-w-[700px] w-full h-[400px] flex flex-col gap-2">
        <div className="grid grid-cols-3 w-full border-b border-b-white/5 justify-center">
          <div
            onClick={() => {
              setTab("details");
            }}
            className={`${
              tab == "details" ? "bg-white/5" : ""
            } text-center py-2 cursor-pointer text-white/50 border-r border-r-white/5`}
          >
            Payment details
          </div>
          <div
            onClick={() => {
              setTab("processing");
            }}
            className={`${
              tab == "processing" ? "bg-white/5" : ""
            } text-center py-2 cursor-pointer text-white/50 border-r border-r-white/5`}
          >
            Processing
          </div>
          <div
            onClick={() => {
              setTab("done");
            }}
            className={`${
              tab == "done" ? "bg-white/5" : ""
            } text-center py-2 cursor-pointer text-white/50`}
          >
            Done
          </div>
        </div>
        {tab == "details" && (
          <div className=" flex flex-col gap-2">
            <div className="text-white pt-3">
              We only accept mobile money payments for now.
            </div>
            <div className="py-2 flex gap-2">
              <div className="p-2 rounded-xl">
                <img
                  src="/mtn.jpeg"
                  className="w-16 h-11 object-cover rounded-md"
                />
              </div>
              <div className="p-2 rounded-xl">
                <img src="/orange.png" className="w-16 h-11 rounded-md" />
              </div>
            </div>
            <fieldset className="border hover:border-white/50 duration-100 w-full max-w-[400px] cursor-pointer border-white/10 rounded-xl shadow-lg">
              <legend className="ml-3 text-white/50 px-2 text-[14px]">
                Phone Number
              </legend>
              <PhoneInput
                style={{
                  padding: "20px",
                  borderRadius: "4px",
                  fontSize: "14px",
                }}
                className="input-validated placeholder:text-red-700 h-[64px] font-[700] w-full"
                // onFocus={}
                placeholder="Please enter your phone number"
                value={phoneNumber}
                onChange={setPhoneNumber}
                defaultCountry="CM"
              />
            </fieldset>
          </div>
        )}
        {tab == "done" && (
          <div className=" flex flex-col gap-2 h-full items-center justify-center text-white text-center text-xl">
            Your transaction has been completed successfully
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-24 h-24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
              />
            </svg>
            <div className="flex gap-3">
              <button
                onClick={() => {
                  router.back();
                }}
                className="p-4 px-8 hover:bg-white/5 duration-100 bg-white/10 text-sm rounded-xl"
              >
                Back to playlist
              </button>
            </div>
          </div>
        )}
        {tab == "processing" && (
          <div className=" flex flex-col absolute items-center justify-center top-0 left-0 w-full h-screen gap-2">
            <div className="w-12 h-12 border-white/40 border-t-white/80 animate-spin border rounded-full"></div>
            <div className="h-full w-full bg-black/50 absolute"></div>
          </div>
        )}
        {tab == "details" && (
          <div className="w-full mt-auto flex justify-end">
            <button
              onClick={() => {
                setTab("processing");
                setTimeout(() => {
                  setTab("done");
                }, 4000);
              }}
              className="bg-white/10 hover:bg-white/20 rounded-xl text-white p-2  px-9 py-3"
            >
              Pay
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default PaymentScreen;
