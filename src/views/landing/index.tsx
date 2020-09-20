import React, { Suspense } from "react";
import { useRecoilState, useRecoilValue, selector } from "recoil";
import Lottie from "react-lottie";
import Loading from "../../assets/lottie-animations/loading.json";
// State
import { currentTheme, userID } from "../../state";
// Interfaces
import ILandingProps from "./interfaces";
// Components
import { Container, Spacing, Button, Text } from "../../components";
// Queries
import { getUserById } from "./queries";

const Landing = (props: ILandingProps) => {
  const [theme, setTheme] = useRecoilState(currentTheme);

  // Theme setters
  const lightMode = () => setTheme((theme: string) => (theme = "light"));
  const darkMode = () => setTheme((theme: string) => (theme = "dark"));

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

  // Loader - Lottie options
  const loadingAnimationOptions = {
    loop: true,
    autoplay: true,
    animationData: Loading,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <Container>
      {/* Just a welccome message */}
      <Text type="h1">Welcome :D</Text>
      <Text type="h2">Current theme is {theme}</Text>

      {/* Wait for the query then render random username */}
      <Suspense
        fallback={
          <Lottie options={loadingAnimationOptions} height={20} width={80} />
        }
      >
        <Username />
      </Suspense>

      <Spacing spacing={8} />

      {/* Display buttons */}
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
