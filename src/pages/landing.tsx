import React from "react";
import { useRecoilState } from "recoil";
// State
import { currentTheme } from "state";
// Components
import Container from "components/layout/container";
import Spacing from "components/layout/spacing";
import Button from "components/button";
import Text from "components/text";

// Interfaces
interface ILandingProps {}

const Landing = (props: ILandingProps) => {
  const [theme, setTheme] = useRecoilState(currentTheme);

  const changeTheme = () =>
    setTheme((theme: string) => (theme === "light" ? "dark" : "light"));

  return (
    <Container>
      <Text type="h1">Welcome :D</Text>
      <Text type="h2">The current theme is {theme}</Text>
      <div style={{ display: "flex" }}>
        <Button onClick={changeTheme}>Change theme</Button>
        <Spacing spacing={16} />
        <Button type="secondary" onClick={changeTheme}>
          Change theme
        </Button>
        <Spacing spacing={16} />
        <Button type="tertiary" onClick={changeTheme}>
          Change theme
        </Button>
      </div>
    </Container>
  );
};

export default Landing;
