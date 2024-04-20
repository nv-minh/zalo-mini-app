import { atom } from "recoil";

export const bottomNavigationState = atom({
  key: "bottomNavigation",
  default: "home",
});

export const displayNameState = atom({
  key: "displayName",
  default: "",
});
