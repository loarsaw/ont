import { Dispatch } from "@reduxjs/toolkit";
import { stepActions } from "./stepSlice";

export const toggleIndex = (data: any) => {
  return async (dispatch: Dispatch) => {
    dispatch(stepActions.toggleIndex(data));
  };
};
