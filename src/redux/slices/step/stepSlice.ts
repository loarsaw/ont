import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { reducer } from "./reducers";

export interface InitialState {
  index: number;
}

const initialState: InitialState = {
  index: 0,
};
export const stepSlice = createSlice({
  name: "step",
  initialState,
  reducers: reducer,
});

export const stepActions = stepSlice.actions;
