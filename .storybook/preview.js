import { addDecorator } from "@storybook/react";
import { withThemesProvider } from "storybook-addon-styled-component-theme";
// Themes
import { Light, Dark } from "../src/style/themes";

const themes = [Light, Dark];

addDecorator(withThemesProvider(themes));
