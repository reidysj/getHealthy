import { Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export default function Homepage() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  //TODO: verify that the token is valid
  if (token) navigate("/dashboard");

  const handleClick = (location: string) => {
    navigate(location);
  };

  return (
    <>
      <p>This is the homepage</p>
      <Button onClick={() => handleClick("/login")}>Login</Button>
      <Button onClick={() => handleClick("/register")}>Sign Up</Button>
    </>
  );
}
