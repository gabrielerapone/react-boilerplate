import React from "react";
import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router } from "react-router-dom";
import "normalize.css";
import GlobalStyle from "globalStyle";
// Themes
import defaultTheme from "themes/defaultTheme";
// Router
import Routes from "routes";

const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Router>
        <Routes />
      </Router>
      <GlobalStyle />
    </ThemeProvider>
  );
};

export default App;
