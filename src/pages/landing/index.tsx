import React, { Suspense, useState } from "react";
import styled from 'styled-components';
import { useRecoilState, useRecoilValue, selector } from "recoil";
import Lottie from "react-lottie";
// Assets
import { loadingTitle } from "../../assets/lottie-animations/config";
// State
import { currentTheme, userID } from "../../state";
// Components
import { Container, Spacing, Button, Text } from "../../components";
// Queries
import { getUserById } from "./queries";
// Interfaces
interface ILandingProps {}

const Landing = (props: ILandingProps) => {
  const [theme, setTheme] = useRecoilState(currentTheme);

  // Theme setters
  const changeTheme = (newTheme: string) =>
    setTheme((theme: string) => (theme = newTheme));

  // Get username
  const getUserName = selector({
    key: "userName",
    get: async ({ get }) => {
      const response = await getUserById(get(userID));
      return response.name;
    },
  });

  // Render username
  const Username = () => {
    const username = useRecoilValue(getUserName);
    return <Text type="h4">{username}</Text>;
  };
 
  return (
    <BG>
      {/* Just a welccome message */}
      <Text type="h1">Welcome :D</Text>
      <Text type="h2">Current theme is {theme}</Text>

      {/* Wait for the query then render a random username */}
      <Suspense
        fallback={
          <Lottie options={loadingTitle} height={20} width={80} />
        }
      >
        {/* <Username /> */}
      </Suspense>

      <Spacing spacing={8} />

      {/* Display buttons */}
      <div style={{ display: "flex" }}>
        <Button
          state={theme === "dark" ? "disabled" : "default"}
          onClick={() => changeTheme("dark")}
        >
          Dark mode
        </Button>

        <Spacing spacing={16} />

        <Button
          type="secondary"
          state={theme === "light" ? "disabled" : "default"}
          onClick={() => changeTheme("light")}
          >
            Light mode
        </Button>

        <Spacing spacing={16} />
        <Button type="tertiary" to="/hello">
          Try routing
        </Button>
      </div>
    </BG>
  );
};

// Styled components
const BG = styled(Container)`
  background-color: pink;
`

export default Landing;
