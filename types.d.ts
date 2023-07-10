/**User types signature */
export interface User {
  id: string;
  name: string;
  gender: string | null | undefined;
  phoneNumber: string | null | undefined;
  email: string;
  token: string | null | undefined;
  image: string | null | undefined;
  role: {
    code: string;
  };
}
