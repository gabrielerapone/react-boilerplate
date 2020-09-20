import { atom } from "recoil";

// App theme
export const currentTheme = atom({
  key: "currentTheme",
  default: "light",
});

export const userID = atom({
  key: "currentUserID",
  default: 1,
})