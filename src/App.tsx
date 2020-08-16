import React from "react";
import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router } from "react-router-dom";
import { useRecoilValue } from "recoil";
import "normalize.css";
import GlobalStyle from "style/global_style";
// State
import { currentTheme } from "state";
// Themes
import { Light, Dark } from "style/themes";
// Router
import Routes from "routes";

const App = () => {
  const getCurrentTheme: any = useRecoilValue(currentTheme);

  const theme: any = () => (getCurrentTheme === "light" ? Light : Dark);

  // const getSystemTheme = () => {
  //   if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
  //     return "dark";
  //   } else return "light";
  // };

  // window
  //   .matchMedia("(prefers-color-scheme: dark)")
  //   .addEventListener("change", event => {
  //     console.log(event);
  //     event.matches
  //       ? setTheme((theme: string) => (theme = "dark"))
  //       : setTheme((theme: string) => (theme = "light"));
  //   });

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
// TODO: Import a backup font from google font API
// TODO: Form
// TODO: Create favicon for manifest
// TODO: Super-ellipse?
// TODO: Asynchronous data querie
// TODO: Placeholder components
// TODO: Get interface values from design_tokens objects
// TODO: Theme based on system theme
