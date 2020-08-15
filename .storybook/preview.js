import { addDecorator } from "@storybook/react";
import { withThemesProvider } from "storybook-addon-styled-component-theme";
// Themes
import { light } from "themes/light";
import { dark } from "themes/dark";

const themes = [light, dark];

addDecorator(withThemesProvider(themes));
