import { useState } from "react";
import { Input, Button, Stack, Checkbox } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { handleCheck, handleSubmit } from "../utils/eventHandlers";

export default function Login() {
  const [loginInfo, setLoginInfo] = useState({
    username: "",
    password: "",
    rememberMe: false,
  });
  const navigate = useNavigate();

  const change = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginInfo({ ...loginInfo, [e.target.name]: e.target.value });
  };

  const check = (e: React.ChangeEvent<HTMLInputElement>) => {
    // setLoginInfo({
    //   ...loginInfo,
    //   [e.target.name]: !loginInfo[e.target.name as keyof LoginInfo],
    // });
    handleCheck(e, setLoginInfo, loginInfo);
  };

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
            onChange={change}
          />
          <Input
            placeholder="Password"
            name="password"
            value={loginInfo.password}
            onChange={change}
          />
          <Checkbox
            isChecked={loginInfo.rememberMe}
            onChange={check}
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
