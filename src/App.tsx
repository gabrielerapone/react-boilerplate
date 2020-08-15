import React from "react";
import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router } from "react-router-dom";
import { useRecoilValue } from "recoil";
import "normalize.css";
import GlobalStyle from "global_style";
// State
import { currentTheme } from "state";
// Themes
import { light } from "themes/light";
import { dark } from "themes/dark";
// Router
import Routes from "routes";

const App = () => {
  const getCurrentTheme: any = useRecoilValue(currentTheme);

  const theme: any = () =>
    getCurrentTheme === "light" ? light : dark;

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

// TODO: Implement tests
// TODO: Create stories
// TODO: Form
// TODO: Create favicon for manifest
// TODO: Super-ellipse?
// TODO: Asynchronous data querie
// TODO: Placeholder components
// TODO: Make interface values from design_tokens objects