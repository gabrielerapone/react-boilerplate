import React from "react";
// Components
import Container from "../../components/layout/container";
import Button from "../../components/button";
import Text from "../../components/text";

// Interfaces
interface IHelloProps {}

const Hello = (props: IHelloProps) => {

  return (
    <Container>
      <Text type="h1">:D</Text>
      <Button to="/">
        Try routing
      </Button>
    </Container>
  );
};

export default Hello;
