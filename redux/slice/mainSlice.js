import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  value: {
    primary: "",
    secondary: "",
    accent: "",
    text: "",
    bgColor: "",
  },
};
export const randomize = createSlice({
  name: "randomize",
  initialState: initialState,
  reducers: {
    reset: (state, action) => {
      return initialState;
    },
    randomizeFn: (state, action) => {
      const value = {
        primary: action?.payload?.randomPrimary,
        secondary: action?.payload?.randomSecondary,
        accent: action?.payload?.randomAccent,
        bgColor: action?.payload?.randomBgColor,
        text: action?.payload?.randomTextColor,
      };
      return value;
    },
  },
});
export const { randomizeFn, reset } = randomize.actions;
export default randomize?.reducer;
