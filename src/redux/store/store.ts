import { configureStore } from "@reduxjs/toolkit";
import { formSlice } from "../slices/form/formSlice";
import { dataSlice } from "../slices/data/dataSlice";
import { stepSlice } from "../slices/step/stepSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      [formSlice.name]: formSlice.reducer,
      [dataSlice.name]: dataSlice.reducer,
      [stepSlice.name]: stepSlice.reducer,
    },
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
