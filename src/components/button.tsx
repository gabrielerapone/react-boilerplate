import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
// Interfaces
export interface IButton {
  children: any;
  type: "primary" | "secondary" | "tertiary";
  state: "default" | "active" | "disabled";
  wide: boolean;
  onClick: any;
  to?: string;
}

const Button = ({ children, type, state, wide, onClick, to }: IButton) => {
  return (
    <Div type={type} state={state} wide={wide} onClick={onClick}>
      {to ? (
        <Link to={to} draggable="false">
          {children}
        </Link>
      ) : (
        children
      )}
    </Div>
  );
};
Button.defaultProps = {
  children: "Text",
  type: "primary",
  state: "default",
  wide: false,
} as Partial<IButton>;

// Styled components
const Div = styled.div<IButton>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${({ wide }) => (wide ? "100%" : "auto")};
  background-color: ${({ theme, type, state }) =>
    theme.button[type].backgroundColor[state]};
  color: ${({ theme, type, state }) => theme.button[type].color[state]};
  border-radius: ${({ theme, type }) => theme.button[type].borderRadius};
  padding: ${({ theme, type }) => theme.button[type].padding};
  box-shadow: ${({ theme, type }) => theme.button[type].boxShadow};
  border: ${({ theme, type }) => theme.button[type].border};
  cursor: ${({ state }) => (state === "disabled" ? "default" : "pointer")};
  text-transform: uppercase;
  letter-spacing: 0.05rem;
  user-select: none;
  a {
    color: ${({ theme, type, state }) => theme.button[type].color[state]};
    border: ${({ theme, type }) => theme.button[type].border};
    cursor: ${({ state }) => (state === "disabled" ? "default" : "pointer")};
    text-decoration: none;
    letter-spacing: 0.05rem;
    user-select: none;
  }
`;

export default Button;
