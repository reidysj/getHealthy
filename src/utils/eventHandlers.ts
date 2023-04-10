import React from "react";
import { axiosPost } from "./customAxios";

const handleSubmit = (
  e: { preventDefault: () => void },
  route: string,
  payload: any
): any => {
  e.preventDefault();
  return axiosPost(route, payload).then((data) => {
    //TODO: Figure out why this isn't setting the token and I needed to add it to the component itself
    //TODO: Set tokens as headers in all requests, not as payload
    if (data.token) localStorage.setItem("token", data.token);
    return data;
  });
};

const handleChange = (
  e: React.ChangeEvent<HTMLInputElement>,
  setter: (arg0: any) => void,
  data: any
) => {
  setter({ ...data, [e.target.name]: e.target.value });
};

const handleCheck = (
  e: React.ChangeEvent<HTMLInputElement>,
  setter: (arg0: any) => void,
  data: {
    [x: string]: any;
    username?: string;
    password?: string;
    passwordConfirmation?: string;
    email?: string;
    country?: string;
    city?: string;
    state?: string;
    mobile_number?: string;
    mobile_contact_allowed?: boolean;
    email_contact_allowed?: boolean;
    tos_accepted?: boolean;
  }
) => {
  setter({ ...data, [e.target.name]: !data[e.target.name] });
};

const handleSelect = (
  e: React.ChangeEvent<HTMLSelectElement>,
  setter: {
    (
      value: React.SetStateAction<{
        username: string;
        password: string;
        passwordConfirmation: string;
        email: string;
        country: string;
        city: string;
        state: string;
        mobile_number: string;
        mobile_contact_allowed: boolean;
        email_contact_enabled: boolean;
        tos_accepted: boolean;
      }>
    ): void;
    (arg0: any): void;
  },
  data: {
    username: string;
    password: string;
    passwordConfirmation: string;
    email: string;
    country: string;
    city: string;
    state: string;
    mobile_number: string;
    mobile_contact_allowed: boolean;
    email_contact_enabled: boolean;
    tos_accepted: boolean;
  }
) => {
  setter({ ...data, [e.target.name]: e.target.value });
};

export { handleSubmit, handleChange, handleCheck, handleSelect };
