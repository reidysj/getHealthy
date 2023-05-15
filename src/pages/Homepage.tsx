import {
  Button,
  Card,
  Stack,
  CardBody,
  Heading,
  Text,
  CardFooter,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { BiBody } from "react-icons/bi";

export default function Homepage() {
  const navigate = useNavigate();
  // const token = localStorage.getItem("token");
  // console.log(token);

  //TODO: verify that the token is valid
  // if (token) navigate("/dashboard");

  const handleClick = (location: string) => {
    navigate(location);
  };

  return (
    <>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div>
          <BiBody size="70" />
        </div>
        <a href="/">Home</a>
        <a href="/">Company</a>
        <a href="/">Product</a>
        <a href="/">Contact</a>
        <div
          style={{
            display: "flex",
            width: "20%",
            justifyContent: "space-between",
          }}
        >
          <Button onClick={() => handleClick("/login")}>Sign In</Button>
          <Button onClick={() => handleClick("/register")}>Register</Button>
        </div>
      </div>
      <Card style={{ backgroundColor: "EEEEEE" }}>
        <Heading style={{ textAlign: "center" }} size="lg">
          Get Healthy!
        </Heading>
        <Stack>
          <CardBody>
            <div>
              <Text py="2" style={{ textAlign: "center" }}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure
                corrupti, fuga obcaecati, et deleniti consequatur molestias
                quia, adipisci veniam quae totam exercitationem. Ad architecto
                harum vel explicabo consectetur ea unde.
              </Text>
              <div></div>
            </div>
          </CardBody>
          <CardFooter
            style={{
              margin: "auto",
            }}
          ></CardFooter>
        </Stack>
      </Card>
    </>
  );
}
