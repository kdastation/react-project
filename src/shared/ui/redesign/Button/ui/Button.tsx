import { forwardRef } from "react";

import { ButtonProps } from "@/shared/types/ButtonProps";

type Props = ButtonProps;

export const Button = forwardRef<HTMLButtonElement, Props>(({ type = "button", ...props }, ref) => {
  const classes = [];
  return <button {...props} ref={ref} type={type} />;
});
