import React from "react";
import styled from 'styled-components';
// Components
import Container from "../../components/layout/container";
import Button from "../../components/button";
import Text from "../../components/text";

// Interfaces
interface IHelloProps {};

const Hello = (props: IHelloProps) => {
  return (
    <BG>
      <Text type="h1">:D</Text>
      <Button to="/">
        Try routing
      </Button>
    </BG>
  );
};

// Styled components
const BG = styled(Container)`
  background-color: #c0c6ff;
`

export default Hello;
