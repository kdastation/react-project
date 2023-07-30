import { ChangeEvent, FC, InputHTMLAttributes } from "react";

import { classNames } from "@/shared/lib/classNames/classNames";
import { TestProps } from "@/shared/types/TestProps";

import styles from "./TextField.module.scss";

type TextFieldProps = Omit<InputHTMLAttributes<HTMLInputElement>, "type" | "className"> & {
  type?: "text" | "password";
  className?: string;
  onChangeValue?: (value: string) => void;
} & TestProps;

export const TextField: FC<TextFieldProps> = ({
  type = "text",
  className,
  onChangeValue,
  onChange,
  ...otherProps
}) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (onChangeValue) {
      onChangeValue(event.target.value);
    }
    if (onChange) {
      onChange(event);
    }
  };

  return (
    <input
      {...otherProps}
      className={classNames(styles.text_field, {}, [className])}
      type={type}
      onChange={handleChange}
    />
  );
};
