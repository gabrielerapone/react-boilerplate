import { DefaultTheme } from "styled-components";
import { color, gradient, typography, spacing, bezier } from "../design_tokens";

// Main colors
const primary: string = color.orange;
const secondary: string = color.blue;

// Theme
export const dark: DefaultTheme = {
         color: {
           primary,
           secondary,
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
         background: color.grey90,
         typography,
         textColor: color.white,
         spacing,
         bezier: {
           ease_out: bezier.ease_out,
         },
         button: {
           primary: {
             backgroundColor: {
               default: primary,
               active: `${primary}90`,
               disabled: `${primary}80`,
             },
             fontSize: {
               default: ".9rem",
               small: ".75rem",
               big: "1rem",
             },
             color: color.white,
             borderRadius: "12px",
             padding: "8px 24px",
             boxShadow: "none",
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
             color: primary,
             borderRadius: "12px",
             padding: "8px 24px",
             boxShadow: "none",
             border: `none`,
           },
           tertiary: {
             backgroundColor: {
               default: "transparent",
               active: `${primary}90`,
               disabled: `${primary}80`,
             },
             fontSize: {
               default: ".9rem",
               small: ".75rem",
               big: "1rem",
             },
             color: primary,
             borderRadius: "12px",
             padding: "8px 24px",
             boxShadow: "none",
             border: `none`,
           },
         },
       };

export default dark;
