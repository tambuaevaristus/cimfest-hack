/* eslint-disable @next/next/no-img-element */
import PhoneInput, { isPossiblePhoneNumber } from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { E164Number } from "libphonenumber-js/min";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import OtpScreen from "./OtpScreen";
import { signIn } from "@/utils/functions";
import {
  ConfirmationResult,
  RecaptchaVerifier,
  signInWithPhoneNumber,
} from "firebase/auth";
import { auth } from "@/firebase_config";

const AuthScreen = () => {
  const [phoneNumber, setPhoneNumber] = useState<E164Number | undefined>("");

  const [loading, setLoading] = useState(false);
  const [otpReady, setOtpReady] = useState<boolean>(true);
  const router = useRouter();
  const screen = router.asPath;
  console.log(screen);
  const generateRecaptcha = () => {
    window.recaptchaVerifier = new RecaptchaVerifier(
      auth,
      "recaptcha-container",
      {
        size: "invisible",
      }
    );
  };

  const SignUpUser = async (): Promise<ConfirmationResult> => {
    const appVerifier = window?.recaptchaVerifier;
    const results = await signInWithPhoneNumber(
      auth,
      phoneNumber ? phoneNumber : "",
      appVerifier
    ).catch((error: any) => error);
    console.log(results);

    return results;
  };

  const requestOTP = async () => {
    await generateRecaptcha();
    await SignUpUser()
      .then((confirmationResult) => {
        window.confirmationResult = confirmationResult;
        setOtpReady(false);
        setLoading(false);
        // setCorrectPhoneNumber(false);
        console.log("after request");
      })
      .catch((error) => error);
  };

  //  

  return otpReady ? (
    <div className="h-screen w-full flex flex-col p-3 gap-3 items-center justify-center">
      <div id="recaptcha-container"></div>
      <div className="p-4 rounded-xl max-w-[400px] gap-3 h-[400px] border flex flex-col justify-center border-white/10 w-full">
        <fieldset className="border hover:border-white/50 duration-100 cursor-pointer border-white/10 rounded-xl shadow-lg">
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
        <div
          onClick={() => {
            setLoading(true);
            signIn().then(() => {
              setLoading(false);
              router.push("/?tab=home")
            });
          }}
          className="rounded-xl cursor-pointer bg-white/5 hover:bg-white/10 duration-100 flex justify-center items-center gap-3 border-white/10 p-3"
        >
          <img src="/google_icon.png" alt="" />
          <div className="text-white">Sign Up with google</div>
        </div>
      </div>
      <div className="flex max-w-[400px] w-full justify-end">
        <button
          onClick={() => {
            requestOTP();
          }}
          className="bg-white rounded-xl p-3 px-8 hover:bg-white/50 duration-100"
        >
          {/signup/.test(screen) ? "Sign Up" : "Sign In"}
        </button>
      </div>
    </div>
  ) : (
    <OtpScreen phoneNumber={phoneNumber} />
  );
};

export default AuthScreen;
