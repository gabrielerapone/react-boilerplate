import { atom } from "recoil";

// App theme
export const currentTheme = atom({
  key: "currentTheme",
  default: "light",
});

export const user = atom({
  key: "currentUser",
  default: null
})