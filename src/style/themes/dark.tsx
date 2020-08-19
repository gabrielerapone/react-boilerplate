import { DefaultTheme } from "styled-components";
import {
  color,
  gradient,
  typography,
  spacing,
  bezier,
} from "../design_tokens";

// Main colors
const primary = {
  default: color.orange,
  disabled: color.orange20,
};
const secondary = {
  default: color.blue,
  disabled: color.blue20,
};

// Theme
const Dark: DefaultTheme = {
  background: color.grey90,
  color: {
    primary: {
      default: primary.default,
      disabled: primary.disabled,
    },
    secondary: {
      default: secondary.default,
      disabled: secondary.disabled,
    },
    red: color.red,
    yellow: color.yellow,
    green: color.green,
    black: color.black,
    grey90: color.grey90,
    grey80: color.grey80,
    grey70: color.grey70,
    grey60: color.grey60,
    grey50: color.grey50,
    grey40: color.grey40,
    grey30: color.grey30,
    grey20: color.grey20,
    grey10: color.grey10,
    white: color.white,
  },
  gradient: {
    primary: gradient.primary,
    dark: gradient.dark,
    light: gradient.light,
  },
  typography,
  textColor: color.white,
  spacing,
  bezier: {
    ease_out: bezier.ease_out,
  },
  button: {
    primary: {
      backgroundColor: {
        default: primary.default,
        active: primary.default,
        disabled: primary.disabled,
      },
      fontSize: {
        default: ".9rem",
        small: ".75rem",
        big: "1rem",
      },
      color: {
        default: color.white,
        active: color.white,
        disabled: `${color.white}90`,
      },
      borderRadius: "12px",
      padding: "8px 24px",
      boxShadow: `0 6px 21px -4px ${primary}60`,
      border: "none",
    },
    secondary: {
      backgroundColor: {
        default: color.white,
        active: `${primary}90`,
        disabled: `${primary}80`,
      },
      fontSize: {
        default: ".9rem",
        small: ".75rem",
        big: "1rem",
      },
      color: {
        default: primary.default,
        active: primary.default,
        disabled: primary.disabled,
      },
      borderRadius: "12px",
      padding: "8px 24px",
      boxShadow: "none",
      border: `none`,
    },
    tertiary: {
      backgroundColor: {
        default: "transparent",
        active: "transparent",
        disabled: "transparent",
      },
      fontSize: {
        default: ".9rem",
        small: ".75rem",
        big: "1rem",
      },
      color: {
        default: primary.default,
        active: primary.default,
        disabled: primary.disabled,
      },
      borderRadius: "12px",
      padding: "8px 24px",
      boxShadow: "none",
      border: `none`,
    },
  },
};

export default Dark;
