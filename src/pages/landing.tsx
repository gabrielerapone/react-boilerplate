import React from "react";
import { useRecoilState } from "recoil";
// State
import { currentTheme } from "state";
// Components
import { Container, Spacing, Button, Text } from "components";

// Interfaces
interface ILandingProps {}

const Landing = (props: ILandingProps) => {
  const [theme, setTheme] = useRecoilState(currentTheme);

  // const changeTheme = () =>
  //   setTheme((theme: string) => (theme === "light" ? "dark" : "light"));
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
