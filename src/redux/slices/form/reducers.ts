import { PayloadAction } from "@reduxjs/toolkit";
import { InitialState } from "./formSlice";

export const reducer = {
  setFormData(state: InitialState, action: PayloadAction<any>) {
    state.formData = action.payload;
  },
};
