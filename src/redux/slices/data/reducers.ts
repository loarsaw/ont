import { PayloadAction } from "@reduxjs/toolkit";
import { InitialState } from "./dataSlice";

export const reducer = {
  setData(state: InitialState, action: PayloadAction<any>) {
    state.dataArray = action.payload;
  },
};
