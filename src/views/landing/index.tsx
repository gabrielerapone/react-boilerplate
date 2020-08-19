import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
// State
import { currentTheme } from "../../state";
// Interfaces
import ILandingProps from './interfaces';
// Components
import { Container, Spacing, Button, Text } from "../../components";
// Queries
import { getUserById } from "./queries";

const Landing = (props: ILandingProps) => {
  const [theme, setTheme] = useRecoilState(currentTheme);

  useEffect(() => {
    getUserById(1);
  });

  const lightMode = () => setTheme((theme: string) => (theme = "light"));
  const darkMode = () => setTheme((theme: string) => (theme = "dark"));

  return (
    <Container>
      <Text type="h1">Welcome :D</Text>
      <Text type="h2">Current theme is {theme}</Text>

      <Spacing spacing={8} />

      <div style={{ display: "flex" }}>
        <Button
          state={theme === "dark" ? "disabled" : "default"}
          onClick={darkMode}
        >
          Dark mode
        </Button>

        <Spacing spacing={16} />

        <Button
          type="secondary"
          state={theme === "light" ? "disabled" : "default"}
          onClick={lightMode}
        >
          Light mode
        </Button>

        <Spacing spacing={16} />

        <Button type="tertiary" to="/hello">
          Try routing
        </Button>
      </div>
    </Container>
  );
};

export default Landing;
