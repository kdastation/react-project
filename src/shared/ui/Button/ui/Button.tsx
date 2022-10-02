import React, { ButtonHTMLAttributes, FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import styles from './Button.module.scss';

type ButtonProps = {
  theme?: string
} & ButtonHTMLAttributes<HTMLButtonElement>

const Button: FC<ButtonProps> = ({
  children,
  theme,
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

export default Button;
