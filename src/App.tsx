import React from "react";
import { hot } from "react-hot-loader/root";
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
// Returns current theme to pass to ThemeProvider 
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

export default hot(App);

// TODO: Document project (comments and README)

// TODO: Implement tests
// TODO: Fix storybook (currently not compatible with webpack 5)
// TODO: 404 page

// TODO: Get interface values from design_tokens objects

// TODO: Import a backup font from Google Font API
// TODO: Redefine text design tokens (current approach is better for themes)
// TODO: Create favicon for manifest

// TODO: Formik | React Form

// TODO: React spring animating mount and unmount

// TODO: i18n(?)

// TODO: Different layouts for views