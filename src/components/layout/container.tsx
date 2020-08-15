import React from "react";
import styled from "styled-components";

interface IContainer {
  children: any;
  height: number;
  flexDirection: string;
  justifyContent: string;
  alignItems: string;
}

const Container = ({
  children,
  height,
  flexDirection,
  justifyContent,
  alignItems,
}: IContainer) => (
  <Div
    height={height}
    flexDirection={flexDirection}
    justifyContent={justifyContent}
    alignItems={alignItems}
  >
    {children}
  </Div>
);

// Default props
Container.defaultProps = {
  height: 100,
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
} as Partial<IContainer>;

// Styled components
const Div = styled.div<IContainer>`
  display: flex;
  flex-direction: ${({ flexDirection }) => flexDirection};
  justify-content: ${({ justifyContent }) => justifyContent};
  align-items: ${({ alignItems }) => alignItems};
  height: ${({ height }) => height}vh;
`;

export default Container;
