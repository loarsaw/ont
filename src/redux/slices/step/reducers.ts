import { PayloadAction } from "@reduxjs/toolkit";
import { InitialState } from "./stepSlice";

export const reducer = {
  incrementIndex(state: InitialState, action: PayloadAction<any>) {
    state.index = action.payload;
  },
  decrementIndex(state: InitialState, action: PayloadAction<any>) {
    state.index = action.payload;
  },
};
