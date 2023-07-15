import { FC } from "react";
import { Article } from "@/entities/Article";
import styles from "./ArticleItem.module.scss";
import { Header } from "./Header/Header";
import { VStack } from "@/shared/ui/Stack";
import { Title } from "./Title/Title";

type ArticleItemProps = {
  article: Article;
};

export const ArticleItem: FC<ArticleItemProps> = ({ article }) => (
  <VStack className={styles.container} gap="16">
    <Header name={article.user.name} date={article.createdAt} />
    <Title title={article.title} />
    <p>{article.title}</p>
    <p>{article.views}</p>
  </VStack>
);
