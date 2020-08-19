import React from "react";
import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router } from "react-router-dom";
import { useRecoilValue } from "recoil";
import "normalize.css";
import GlobalStyle from "./style/global_style";
// State
import { currentTheme } from "./state";
// Themes
import { Light, Dark } from "./style/themes";
// Router
import Routes from "./routes";

const App = () => {



// Get current theme from global state
const getCurrentTheme: any = useRecoilValue(currentTheme);
// Returns current theme (string) to pass to ThemeProvider 
const theme: any = () => (getCurrentTheme === "light" ? Light : Dark);

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes />
      </Router>
      <GlobalStyle />
    </ThemeProvider>
  );
};

export default App;

// TODO: Document project (comments and README)

// TODO: Implement tests
// TODO: Fix storybook

// TODO: Get interface values from design_tokens objects

// TODO: Import a backup font from Google Font API
// TODO: Redefine text design tokens (current approach is better for themes)
// TODO: Create favicon for manifest

// TODO: Formik | React Form

// TODO: Asynchronous data queries with Suspense API
// TODO: React spring animating mount and unmount
// TODO: Placeholder components with lottie

// TODO: i18n(?)

// TODO: Different layouts for views