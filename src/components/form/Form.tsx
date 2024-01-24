import { HTMLAttributes, ReactNode } from "react";

interface FormType {
  children: ReactNode;
  props: HTMLAttributes<HTMLFormElement>;
}

export const MultiForm = ({ children, ...props }: FormType) => {
  return (
    <form {...props} noValidate>
      {children}
    </form>
  );
};
