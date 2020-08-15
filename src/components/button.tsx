import React from "react";
import styled from "styled-components";
// Interfaces
export interface IButton {
  children: any;
  type: "primary" | "secondary" | "tertiary";
  state: "default" | "active" | "disabled";
  wide: boolean,
  onClick: any,
}

const Button = ({ children, type, state, wide, onClick }: IButton) => (
  <Div type={type} state={state} wide={wide} onClick={onClick}>
    {children}
  </Div>
);

Button.defaultProps = {
  children: "Text",
  type: "primary",
  state: "default",
  wide: false
} as Partial<IButton>;

// Styled components
const Div = styled.div<IButton>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${({wide}) => wide ? "100%" : "auto"};
  background-color: ${({theme, type, state}) => theme.button[type].backgroundColor[state]};
  color: ${({theme, type}) => theme.button[type].color};
  border-radius: ${({ theme, type }) => theme.button[type].borderRadius};
  padding: ${({theme, type}) => theme.button[type].padding};
  box-shadow: ${({ theme, type }) => theme.button[type].boxShadow};
  border: ${({theme, type}) => theme.button[type].border};
  cursor: ${({ state }) => state === "disabled" ? "default" : "pointer"};
  text-transform: uppercase;
  letter-spacing: .05rem;
  user-select: none;
`;

export default Button;
