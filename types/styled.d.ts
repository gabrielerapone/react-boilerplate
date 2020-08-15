import "styled-components";

interface IColor {
  primary: string;
  secondary: string;
  red: string;
  yellow: string;
  green: string;
  black: string;
  grey90: string;
  grey80: string;
  grey70: string;
  grey60: string;
  grey50: string;
  grey40: string;
  grey30: string;
  grey20: string;
  grey10: string;
  white: string;
}

interface IGradient {
  primary: string;
  dark: string;
  light: string;
}

type IBackground = string;

interface ITypography {
  fontFamily: string;
  fontSize: string;
  lineHeight: string;
  margin: string;
  textTranform: string,
  letterSpacing: string,
}

type ITextColor = string;

type ISpacing = number[];

interface IBezier {
  ease_out: string;
}

interface IButton {
  backgroundColor: {
    default: string;
    active: string;
    disabled: string;
  };
  fontSize: {
    default: string,
    small: string,
    big: string,
  },
  color: string;
  borderRadius: string;
  padding: string;
  boxShadow: string;
  border: string;
}

declare module "styled-components" {
  export interface DefaultTheme {
    color: IColor;
    background: IBackground;
    gradient: IGradient;
    typography: {
      h1: ITypography;
      h2: ITypography;
      h3: ITypography;
      h4: ITypography;
      h5: ITypography;
      p: ITypography;
      detail: ITypography;
    };
    textColor: ITextColor;
    spacing: ISpacing;
    bezier: IBezier;
    button: {
      primary: IButton;
      secondary: IButton;
      tertiary: IButton;
    };
  }
}
