import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth"
import { auth } from "../../firebase_config";
import { displayNotification } from "./notification";
import { useRouter } from "next/router";
export async function signIn() {
    const provider = await new GoogleAuthProvider()
    await signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential?.accessToken;
        // The signed-in user info.
        const user = result.user;
        displayNotification("success","Successfully signed in.",4000,"dark")
        setTimeout(()=>{
            window.location.href = "/"
        },2000)
        // IdP data available using getAdditionalUserInfo(result)
        // ...
      }).catch((error) => {
        // Handle Errors here.
        console.error(error);
        
        displayNotification("error","We encountered a problem in signing you in.",4000,"dark")
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
        
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  }