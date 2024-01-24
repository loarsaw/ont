import { Dispatch } from "@reduxjs/toolkit";
import { stepActions } from "./stepSlice";

export const incrementIndex = (data: any) => {
  return async (dispatch: Dispatch) => {
    dispatch(stepActions.incrementIndex(data));
  };
};

export const decrementIndex = (data: any) => {
  return async (dispatch: Dispatch) => {
    dispatch(stepActions.decrementIndex(data));
  };
};
