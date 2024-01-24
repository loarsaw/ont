import { Button, ButtonProps } from "@mui/material";
import { forwardRef, ReactNode } from "react";
interface FButtonProps extends ButtonProps {
  children: ReactNode;
}

export const FButton = forwardRef<HTMLButtonElement, FButtonProps>(
  ({ children, ...props }, ref) => {
    return <Button {...props}>{children}</Button>;
  }
);
