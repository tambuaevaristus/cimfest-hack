/* eslint-disable @next/next/no-img-element */
import "react-phone-number-input/style.css";
import { useState } from "react";
import { useRouter } from "next/router";

import OtpInput from "react18-input-otp";
interface Props {
  phoneNumber?: string;
}
const OtpScreen = ({phoneNumber}:Props) => {
  const [code, setCode] = useState<string>();
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();
  const screen = router.asPath;
  console.log(screen);
  const verifyOTP = async () => {
    // authenticate user
    const confirmationResult = await window?.confirmationResult;
    await confirmationResult
      ?.confirm(code)
      // frbsUserCreds :-  firebase user credentials
      // TODO: remove any from then callback.
      .then((frbsUserCreds: any) => {
        localStorage.setItem("userId", frbsUserCreds?.user?.uid);
        localStorage.setItem(
          "userAccessToken",
          frbsUserCreds?.user?.accessToken
        );
        if (localStorage.getItem("userName") == undefined) {
          // addUser(
          //   frbsUserCreds?.user?.uid,
          //   frbsUserCreds?.user?.accessToken
          // ).then(() => {
          //   router.back();
          // });
          console.log(frbsUserCreds);
        } else {
          router.back();
        }

        // const uid = frbsUserCreds?.user?.uid;
        // const token = frbsUserCreds?.user?.accessToken;
      })
      .catch((error: { message: React.SetStateAction<string> }) => {
        console.log(error?.message);
        setLoading(false);
        if (/invalid-verification-code/.test(String(error?.message))) {
          // return setModal("code-err");
        } else {
          // return setModal("failed");
        }
      });
  };
  // async function addUser(uid: string, token: string) {
  //   const userObj = {
  //     profileImage: "",
  //     userName: userName,
  //     createdAt: new Date(),
  //     userId: uid,
  //     updatedAt: "",
  //     accessToken: token,
  //     phoneNumber: phoneNumber,
  //   };
  //   await setDoc(doc(db, "users", `${uid}`), userObj)
  //     .then((elem) => {
  //       setLoading(false);
  //       localStorage.setItem("userName", userName);
  //     })
  //     .catch((err) => {
  //       setLoading(false);
  //       console.error(err);
  //     });
  // }

  return (
    <div className="h-screen w-full flex p-4 flex-col items-center justify-center">
      <div className="flex flex-col gap-5 p-3 max-w-[400px] w-full h-[400px] justify-center items-center border rounded-xl border-white/10">
        <div className="text-white text-center text-sm">
          Please fill in the 6 digit code we sent to 6 ********
        </div>
        <div className="code rounded-xl max-w-[400px] gap-3 flex flex-col w-full">
          <OtpInput
            value={code}
            onChange={setCode}
            className="mx-1 otp rounded-lg flex border font-bold text-xl border-white/10 bg-transparent hover:border-white/50 duration-100 text-white px-[16px] py-[16px]"
            numInputs={6}
            separator={<span></span>}
            isInputNum={true}
          />
        </div>
        <div className="flex max-w-[400px] w-full justify-center">
          <button
            onClick={() => {
              verifyOTP();
            }}
            className={`${
              code?.length == 6 ? "bg-white cursor-pointer" : "bg-white/50 cursor-not-allowed"
            }  rounded-xl p-3 px-8 hover:bg-white/50 duration-100`}
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default OtpScreen;
