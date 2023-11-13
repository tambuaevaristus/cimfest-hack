export {};
declare global {
    interface Window {
      recaptchaVerifier: RecaptchaVerifier;
      confirmationResult: any;
      // confirmationResult: confirmationResult;
    }
  }