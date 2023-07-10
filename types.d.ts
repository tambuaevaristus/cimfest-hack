/**User types signature */
export interface User {
  id?: string;
  name: string | null | undefined;
  gender?: string | null | undefined;
  phoneNumber?: string | null | undefined;
  email: string;
  token?: string | null | undefined;
  image: string | undefined;
  role?: {
    code: string;
  };
}
