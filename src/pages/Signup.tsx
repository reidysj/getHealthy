import { useState } from "react";
import { Input, Button, Stack, Select, Checkbox } from "@chakra-ui/react";
import states from "../data/states";
import { countries, Country } from "../data/countries";
import axios from "axios";

type SignupInfo = {
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

export default function Signup() {
  const [signupInfo, setSignupInfo] = useState({
    username: "",
    password: "",
    passwordConfirmation: "",
    email: "",
    country: "",
    city: "",
    state: "",
    mobileNumber: "",
    allowMobileContact: false,
    allowEmailContact: false,
    acceptsToS: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSignupInfo({ ...signupInfo, [e.target.name]: e.target.value });
  };

  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSignupInfo({ ...signupInfo, [e.target.name]: e.target.value });
  };

  const handleCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSignupInfo({
      ...signupInfo,
      [e.target.name]: !signupInfo[e.target.name as keyof SignupInfo],
    });
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const payload = {
      username: signupInfo.username,
      password: signupInfo.password,
      email: signupInfo.email,
      city: signupInfo.city,
      state: signupInfo.state,
      mobile_number: signupInfo.mobileNumber,
      mobile_contact_allowed: signupInfo.allowMobileContact,
      email_contact_enabled: signupInfo.allowEmailContact,
      tos_accepted: signupInfo.acceptsToS,
    };
    axios
      .post("http://localhost:5000/api/users/register", payload)
      .then((res) => {
        console.log(res);
      });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Stack spacing="3" width="30%">
          <Input
            placeholder="Username"
            name="username"
            value={signupInfo.username}
            onChange={handleChange}
          />
          <br />
          <Input
            placeholder="Password"
            name="password"
            value={signupInfo.password}
            onChange={handleChange}
          />
          <br />
          <Input
            placeholder="Confirm Password"
            name="passwordConfirmation"
            onChange={handleChange}
            value={signupInfo.passwordConfirmation}
          />
          <br />
          <Input
            placeholder="Email Address"
            onChange={handleChange}
            value={signupInfo.email}
            name="email"
          />
          <br />
          <Select
            placeholder="Country"
            onChange={handleSelect}
            value={signupInfo.country}
            name="country"
          >
            {countries.map((country, i) => {
              return (
                <option value={country.code} key={i}>
                  {country.name}
                </option>
              );
            })}
          </Select>
          <br />
          <Select
            placeholder="State"
            onChange={handleSelect}
            value={signupInfo.state}
            name="state"
            disabled={signupInfo.country !== "US"}
          >
            {states.map((state, i) => {
              return (
                <option value={state.abbreviation} key={i}>
                  {state.name}
                </option>
              );
            })}
          </Select>
          <Input
            type="text"
            placeholder="City"
            value={signupInfo.city}
            onChange={handleChange}
            name="city"
          ></Input>
          <br />
          <Input
            type="phone"
            placeholder="Mobile Phone Number"
            value={signupInfo.mobileNumber}
            onChange={handleChange}
            name="mobileNumber"
          ></Input>
          <br />
          <Checkbox
            isChecked={signupInfo.allowEmailContact}
            onChange={handleCheck}
            name="allowEmailContact"
          >
            Allow email contact?
          </Checkbox>
          <br />
          <Checkbox
            isChecked={signupInfo.allowMobileContact}
            onChange={handleCheck}
            name="allowMobileContact"
          >
            Allow mobile (text) contact?
          </Checkbox>
          <br />
          <Checkbox
            isChecked={signupInfo.acceptsToS}
            onChange={handleCheck}
            name="acceptsToS"
          >
            Accept ToS?
          </Checkbox>
          <br />
          <Button type="submit">Sign Up</Button>
        </Stack>
      </form>
    </>
  );
}
