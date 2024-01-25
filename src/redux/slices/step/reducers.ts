import { PayloadAction } from "@reduxjs/toolkit";
import { InitialState } from "./stepSlice";

export const reducer = {
  toggleIndex(state: InitialState, action: PayloadAction<any>) {
    state.index = action.payload;
  },
};
