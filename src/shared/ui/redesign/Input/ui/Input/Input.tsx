import React from "react";

import { classNames } from "@/shared/lib/classNames/classNames";

import styles from "./Input.module.scss";

type InputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => (
    <input {...props} ref={ref} className={classNames(styles.input, {}, [className])} />
  ),
);
