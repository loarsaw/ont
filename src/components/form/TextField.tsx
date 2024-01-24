import { FormControl, FormLabel } from "@mui/material";
import React, { ReactNode } from "react";

interface TField {
  children: ReactNode;
  label: string;
  error: {
    message: string;
  };
}

export const FTextField = ({ children, label, error }: TField) => {
  const id = getChildId(children);
  return (
    <FormControl>
      <FormLabel htmlFor={id}>{label}</FormLabel>
      {children}
      {error && <p className="text-sm">{error.message}</p>}
    </FormControl>
  );
};

export const getChildId = (children: ReactNode): string | undefined => {
  const child = React.Children.only(children);
  if (React.isValidElement(child)) {
    if ("props" in child && "id" in child.props) {
      return child.props.id;
    }
  }
};
