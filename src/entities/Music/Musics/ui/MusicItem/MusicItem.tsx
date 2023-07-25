import { FC, ReactNode } from "react";
import styles from "./MusicItem.module.scss";

type MusicItemProps = {
  text: string;
  rightAddon?: ReactNode;
};

export const MusicItem: FC<MusicItemProps> = ({ text, rightAddon }) => (
  <div className={styles.container}>
    <div>{text}</div>
    <div>{rightAddon}</div>
  </div>
);
