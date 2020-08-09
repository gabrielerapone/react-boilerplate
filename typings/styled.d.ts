import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      panic: string;
      yolk: string;
      leaf: string;
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
    };
    bezier: string;
  }
}
