import { FC } from "react";
import styles from "./MusicItem.module.scss";

type MusicItemProps = {
  text: string;
};

export const MusicItem: FC<MusicItemProps> = ({ text }) => (
  <div className={styles.container}>{text}</div>
);
