import { Dispatch } from "@reduxjs/toolkit";
import { dataActions } from "./dataSlice";

export const setArrayData = (data: any) => {
  return async (dispatch: Dispatch) => {
    dispatch(dataActions.setData(data));
  };
};
