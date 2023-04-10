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
    <Card style={{ backgroundColor: "EEEEEE" }}>
      <Stack>
        <CardBody>
          <Heading style={{ textAlign: "center" }} size="lg">
            Get Healthy!
          </Heading>
          <div
            style={{
              display: "flex",
              border: "2px solid orange",
            }}
          >
            <Text py="2" style={{ textAlign: "center" }}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure
              corrupti, fuga obcaecati, et deleniti consequatur molestias quia,
              adipisci veniam quae totam exercitationem. Ad architecto harum vel
              explicabo consectetur ea unde.
            </Text>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                height: "100%",
                border: "2px solid red",
              }}
            >
              <Button onClick={() => handleClick("/login")}>Sign In</Button>
              <Button onClick={() => handleClick("/register")}>Register</Button>
            </div>
          </div>
        </CardBody>
        <CardFooter
          style={{
            margin: "auto",
          }}
        ></CardFooter>
      </Stack>
    </Card>
  );
}
