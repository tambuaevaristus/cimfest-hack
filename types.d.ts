/**User types signature */
export interface User {
  id?: string | null | undefined;
  name?: string | null | undefined;
  gender?: string | null | undefined;
  phoneNumber?: string | null | undefined;
  email?: string | null | undefined;
  token?: string | null | undefined;
  image?: string | null | undefined;
  role?: {
    code: string;
  };
}
