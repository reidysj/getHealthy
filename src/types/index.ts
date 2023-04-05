export interface ISignInData {
  username: string;
  password: string;
}

export type LoginInfo = {
  username: string;
  password: string;
  rememberMe: boolean;
};

export type SignupInfo = {
  username: string;
  password: string;
  passwordConfirmation: string;
  email: string;
  country: string;
  city: string;
  state: string;
  mobileNumber: string;
  allowMobileContact: boolean;
  allowEmailContact: boolean;
  acceptsToS: boolean;
};
