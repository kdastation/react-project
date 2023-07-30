import React, { ButtonHTMLAttributes, FC } from "react";

import { classNames } from "@/shared/lib/classNames/classNames";
import { TestProps } from "@/shared/types/TestProps";

import styles from "./Button.module.scss";

export enum ButtonTheme {
  PRIMARY = "primary",
  CLEAR = "clear",
}

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  theme?: ButtonTheme;
} & TestProps;

const Button: FC<ButtonProps> = ({
  children,
  theme = ButtonTheme.PRIMARY,
  className,
  type = "button",
  ...otherProps
}) => (
  <button
    className={classNames(styles.button, {}, [className, styles[theme]])}
    /* eslint-disable-next-line react/button-has-type */
    type={type}
    {...otherProps}
  >
    {children}
  </button>
);

export { Button };
