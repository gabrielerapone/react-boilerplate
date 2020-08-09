import { DefaultTheme } from "styled-components";
import { colors, bezier } from "../style-guide";

const {
  primary,
  secondary,
  panic,
  yolk,
  leaf,
  black,
  grey90,
  grey80,
  grey70,
  grey60,
  grey50,
  grey40,
  grey30,
  grey20,
  grey10,
  white,
} = colors;

export const defaultTheme: DefaultTheme = {
  colors: {
    primary,
    secondary,
    panic,
    yolk,
    leaf,
    black,
    grey90,
    grey80,
    grey70,
    grey60,
    grey50,
    grey40,
    grey30,
    grey20,
    grey10,
    white,
  },
  bezier,
};

export default defaultTheme;
