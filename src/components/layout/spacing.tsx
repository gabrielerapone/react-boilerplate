import React from "react";
import styled from "styled-components";

interface ISpacing {
  spacing: 0 | 4 | 8 | 16 | 32 | 64;
}

const Spacing = ({ spacing }: ISpacing) => <Div spacing={spacing}></Div>;

// Default props
Spacing.defaultProps = {
  space: 16,
} as Partial<ISpacing>;

// Styled components
const Div = styled.div<ISpacing>`
  width: ${({spacing}) => spacing}px;
  height: ${({ spacing }) => spacing}px;
`;

export default Spacing;
