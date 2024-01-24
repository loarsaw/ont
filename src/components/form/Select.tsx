import React, { forwardRef, SelectHTMLAttributes, ForwardedRef } from "react";
import {
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  SelectProps,
} from "@mui/material";

interface NSelectProps extends SelectProps {
  label?: string;
  options: Array<{ value: string; label: string }>;
}
export const SelectInput = forwardRef(
  (props: NSelectProps, ref: ForwardedRef<HTMLSelectElement>) => {
    const { label, options, ...rest } = props;

    return (
      <FormControl className="form-control">
        {label && <InputLabel>{label}</InputLabel>}
        <Select ref={ref} {...rest}>
          {options.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    );
  }
);
