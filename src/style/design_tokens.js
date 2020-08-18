export const color = {
  red: "#EB5757",
  red20: "#f28f8f",
  red10: "#f8c7c7",
  yellow: "#F2C94C",
  yellow20: "#f6db88",
  yellow10: "#fbedc3",
  orange: "#F2994A",
  orange20: "#f6bb86",
  orange10: "#fbddc3",
  green: "#27AE60",
  green20: "#5ddb92",
  green10: "#aeedc9",
  blue: "#2F80ED",
  blue20: "#74aaf3",
  blue10: "#bad5f9",
  purple: "#9B51E0",
  purple20: "#bc8bea",
  purple10: "#dec5f5",
  black: "#000000",
  grey90: "#1a1a1a",
  grey80: "#333333",
  grey70: "#4d4d4d",
  grey60: "#666666",
  grey50: "#808080",
  grey40: "#999999",
  grey30: "#b3b3b3",
  grey20: "#cccccc",
  grey10: "#e6e6e6",
  white: "#FFFFFF",
};

export const gradient = {
  primary: `linear-gradient(270deg, ${color.primary} 0%, ${color.secondary} 100%)`,
  dark: `linear-gradient(270deg, ${color.grey90} 0%, ${color.grey80} 100%)`,
  light: `linear-gradient(270deg, ${color.grey20} 0%, ${color.grey10} 100%)`,
};

// Golden ratio proportions -> https://www.gridlover.net/try
export const typography = {
  h1: {
    fontFamily: "'Pangram',sans-serif",
    fontWeight: "700",
    fontSize: "4.25rem",
    lineHeight: "4.875rem",
    margin: "0 0 1.625rem 0",
    textTranform: "none",
    letterSpacing: ".1rem",
  },
  h2: {
    fontFamily: "'Pangram',sans-serif",
    fontWeight: "100",
    fontSize: "2.625rem",
    lineHeight: "3.25rem",
    margin: "0 0 1.625rem 0",
    textTranform: "uppercase",
    letterSpacing: ".05rem",
  },
  h3: {
    fontFamily: "'Pangram',sans-serif",
    fontWeight: "700",
    fontSize: "1.625rem",
    lineHeight: "1.625rem",
    margin: "0 0 1.625rem 0",
    textTranform: "uppercase",
    letterSpacing: ".2rem",
  },
  h4: {
    fontFamily: "'Pangram',sans-serif",
    fontWeight: "700",
    fontSize: "1rem",
    lineHeight: "1.625rem",
    margin: "0 0 1.625rem 0",
    textTranform: "uppercase",
    letterSpacing: ".1rem",
  },
  h5: {
    fontFamily: "'Pangram',sans-serif",
    fontWeight: "500",
    fontSize: "1rem",
    lineHeight: "1.625rem",
    margin: "0 0 1.625rem 0",
    textTranform: "uppercase",
    letterSpacing: ".125rem",
  },
  p: {
    fontFamily: "'Pangram',sans-serif",
    fontWeight: "400",
    fontSize: "1rem",
    lineHeight: "1.625rem",
    margin: "0 0 1.625rem 0",
    textTranform: "none",
    letterSpacing: ".05rem",
  },
  detail: {
    fontFamily: "'Pangram',sans-serif",
    fontWeight: "300",
    fontSize: "0.8125rem",
    lineHeight: "1.375rem",
    margin: "0",
    textTranform: "none",
    letterSpacing: ".125rem",
  },
};

export const spacing = [0, 4, 8, 16, 32, 64];

export const bezier = {
  ease_out: "cubic-bezier(.05,.17,.52,1.02)",
};

// JSON format of the whole style guide
export const design_tokens_JSON = JSON.stringify([
  color,
  gradient,
  typography,
  spacing,
  bezier,
]);
