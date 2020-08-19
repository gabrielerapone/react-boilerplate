import { addDecorator } from "@storybook/react";
import { withThemesProvider } from "storybook-addon-styled-component-theme";
// Themes
import Light from "../src/style/themes/light";
import Dark from "../src/style/themes/dark";

const themes = [Light, Dark];

addDecorator(withThemesProvider(themes));
