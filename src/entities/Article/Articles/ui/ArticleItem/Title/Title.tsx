import { FC } from "react";
import { DivProps } from "@/shared/types/DivProps";
import styles from "./Title.module.scss";
import { classNames } from "@/shared/lib/classNames/classNames";

type TitleProps = {
  title: string;
} & DivProps;

export const Title: FC<TitleProps> = ({ title, className, ...props }) => (
  <div {...props} className={classNames(styles.container, {}, [className])}>
    {title}
  </div>
);
