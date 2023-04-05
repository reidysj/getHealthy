import { useState } from "react";
import { Input, Button, Stack, Select, Checkbox } from "@chakra-ui/react";
import states from "../data/states";
import { countries } from "../data/countries";
import { useNavigate } from "react-router-dom";
import {
  handleChange,
  handleCheck,
  handleSelect,
  handleSubmit,
} from "../utils/eventHandlers";

export default function Signup() {
  const [signupInfo, setSignupInfo] = useState({
    username: "",
    password: "",
    passwordConfirmation: "",
    email: "",
    country: "",
    city: "",
    state: "",
    mobile_number: "",
    mobile_contact_allowed: false,
    email_contact_enabled: false,
    tos_accepted: false,
  });
  const navigate = useNavigate();

  //TODO: Make handleChange, handleCheck, handleSelect into agnostic utils
  const change = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleChange(e, setSignupInfo, signupInfo);
  };

  const select = (e: React.ChangeEvent<HTMLSelectElement>) => {
    handleSelect(e, setSignupInfo, signupInfo);
  };

  const check = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleCheck(e, setSignupInfo, signupInfo);
  };

  const submit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    handleSubmit(e, "users/register", signupInfo);
    navigate("/dashboard");
  };

  return (
    <>
      <form onSubmit={submit}>
        <Stack
          spacing="3"
          width="30%"
          style={{ margin: "auto", paddingTop: "50px" }}
        >
          <Input
            placeholder="Username"
            name="username"
            value={signupInfo.username}
            onChange={change}
          />
          <br />
          <Input
            placeholder="Password"
            name="password"
            value={signupInfo.password}
            onChange={change}
            type="password"
          />
          <br />
          <Input
            placeholder="Confirm Password"
            name="passwordConfirmation"
            onChange={change}
            value={signupInfo.passwordConfirmation}
          />
          <br />
          <Input
            placeholder="Email Address"
            onChange={change}
            value={signupInfo.email}
            name="email"
          />
          <br />
          <Select
            placeholder="Country"
            onChange={select}
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
            onChange={select}
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
            onChange={change}
            name="city"
          ></Input>
          <br />
          <Input
            type="phone"
            placeholder="Mobile Phone Number"
            value={signupInfo.mobile_number}
            onChange={change}
            name="mobile_number"
          ></Input>
          <br />
          <Checkbox
            isChecked={signupInfo.email_contact_enabled}
            onChange={check}
            name="email_contact_enabled"
          >
            Allow email contact?
          </Checkbox>
          <br />
          <Checkbox
            isChecked={signupInfo.mobile_contact_allowed}
            onChange={check}
            name="mobile_contact_allowed"
          >
            Allow mobile (text) contact?
          </Checkbox>
          <br />
          <Checkbox
            isChecked={signupInfo.tos_accepted}
            onChange={check}
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
