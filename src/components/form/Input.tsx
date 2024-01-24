import { TextField, TextFieldProps } from "@mui/material";
import { ForwardedRef, HTMLAttributes, forwardRef } from "react";

// interface FormInputProps extends TextFieldProps {}

export const FormInput = forwardRef((props: any, ref: any) => {
  return <TextField ref={ref} {...props} />;
});
