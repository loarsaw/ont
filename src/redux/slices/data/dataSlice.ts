import { createSlice } from "@reduxjs/toolkit";
import { reducer } from "./reducers";

export interface InitialState {
  dataArray: [];
}

const initialState: InitialState = {
  dataArray: [],
};
export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: reducer,
});

export const dataActions = dataSlice.actions;
