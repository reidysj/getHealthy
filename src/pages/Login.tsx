import { useState } from "react";
import { Input, Button, Stack, Checkbox } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { handleSubmit } from "../utils/eventHandlers";

type LoginInfo = {
  username: string;
  password: string;
  rememberMe: boolean;
};

export default function Login() {
  const [loginInfo, setLoginInfo] = useState({
    username: "",
    password: "",
    rememberMe: false,
  });
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginInfo({ ...loginInfo, [e.target.name]: e.target.value });
  };

  const handleCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginInfo({
      ...loginInfo,
      [e.target.name]: !loginInfo[e.target.name as keyof LoginInfo],
    });
  };

  // TODO: Make a single handleSubmit function that is agnostic
  const submit = (e: { preventDefault: () => void }) => {
    handleSubmit(e, "users/login", loginInfo);
    navigate("/dashboard");
  };

  return (
    <>
      <form onSubmit={submit}>
        <Stack spacing="3" width="30%">
          <Input
            placeholder="Username"
            name="username"
            value={loginInfo.username}
            onChange={handleChange}
          />
          <Input
            placeholder="Password"
            name="password"
            value={loginInfo.password}
            onChange={handleChange}
          />
          <Checkbox
            isChecked={loginInfo.rememberMe}
            onChange={handleCheck}
            name="rememberMe"
          >
            Remember Me for 30 Days
          </Checkbox>
          <Button type="submit">Log In</Button>
        </Stack>
      </form>
    </>
  );
}
