import { FC } from "react";
import { HStack } from "@/shared/ui/Stack";
import styles from "./Header.module.scss";

type HeaderProps = {
  name: string;
  date: string;
};

export const Header: FC<HeaderProps> = ({ name, date }) => (
  <HStack gap="4">
    <div>{name}</div>
    <div>{date}</div>
  </HStack>
);
