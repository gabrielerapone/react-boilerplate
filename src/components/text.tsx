import React from "react";
import styled from "styled-components";

interface IText {
  children: any;
  type: "h1" | "h2" | "h3" | "h4" | "h5" | "p" | "detail";
}

const Text = ({ children, type }: IText) => <Div type={type}>{children}</Div>;

Text.defaultProps = {
  children: "Text",
  type: "p",
} as Partial<IText>;

// Styled components
const Div = styled.div<IText>`
  color: ${({ theme }) => theme.textColor};
  font-family: ${({ theme, type }) => theme.typography[type].fontFamily};
  font-size: ${({ theme, type }) => theme.typography[type].fontSize};
  line-height: ${({ theme, type }) => theme.typography[type].lineHeight};
  margin: ${({ theme, type }) => theme.typography[type].margin};
  text-transform: ${({ theme, type }) => theme.typography[type].textTranform};
  letter-spacing: ${({theme, type}) => theme.typography[type].letterSpacing};
`;

export default Text;