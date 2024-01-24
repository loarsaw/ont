import { Dispatch } from "@reduxjs/toolkit";
import { formActions } from "./formSlice";

export const setPersonalDetails = (data: any) => {
  return async (dispatch: Dispatch) => {
    dispatch(formActions.setFormData(data));
  };
};
