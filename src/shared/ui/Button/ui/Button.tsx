import React, { ButtonHTMLAttributes, FC, ReactNode } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import styles from './Button.module.scss';

export enum ButtonTheme {
  PRIMARY = 'primary',
  CLEAR = 'clear',
}

type ButtonProps = {
  theme?: ButtonTheme,
} & ButtonHTMLAttributes<HTMLButtonElement>

const Button: FC<ButtonProps> = ({
  children,
  theme = ButtonTheme.PRIMARY,
  className,
  ...otherProps
}) => (
  <button
    className={classNames(
      styles.button,
      {},
      [
        className,
        styles[theme],
      ],
    )}
    {...otherProps}
  >
    {children}
  </button>
);

export { Button };
