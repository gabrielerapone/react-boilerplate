import { atom } from "recoil";

export const currentTheme = atom({
  key: "currentTheme",
  default: "light",
});
