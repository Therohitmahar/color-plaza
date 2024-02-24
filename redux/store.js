import { configureStore } from "@reduxjs/toolkit";
import randomizeReduce from "./slice/mainSlice";

export const store = configureStore({
  reducer: {
    randomizeReduce,
  },
});

export const RootState = store.getState;
export const AppDispatch = store.dispatch;
