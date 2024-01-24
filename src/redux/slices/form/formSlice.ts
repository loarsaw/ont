import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { reducer } from "./reducers";

export interface InitialState {
  formData: {
    name: string;
    address: string;
    sex: string;
    street: string;
    pincode: string;
    mobile: string | null;
    age: number | null;
    id: string | null;
    idType: string;
    country: string;
    city: string;
  };
}

export const initialState: InitialState = {
  formData: {
    name: "",
    address: "",
    sex: "",
    street: "",
    pincode: "",
    mobile: "",
    age: 0,
    id: "",
    idType: "",
    country: "",
    city: "",
  },
};
export const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: reducer,
});

export const formActions = formSlice.actions;
