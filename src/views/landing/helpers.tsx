import { selector } from "recoil";
// Queries
import { getUserById } from './queries';

// Asynchronously get user from global state
export const getUser = selector({
  key: "CurrentUserName",
  get: async ({ get }) => {
    const response = await getUserById(1);
    return console.log(response);
  },
});
