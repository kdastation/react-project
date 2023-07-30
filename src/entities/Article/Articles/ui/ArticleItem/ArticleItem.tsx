import { FC } from "react";

import { Article } from "@/entities/Article";
import { VStack } from "@/shared/ui/Stack";

import styles from "./ArticleItem.module.scss";
import { Header } from "./Header/Header";
import { Title } from "./Title/Title";

type ArticleItemProps = {
  article: Article;
};

export const ArticleItem: FC<ArticleItemProps> = ({ article }) => (
  <div data-testid="ArticleItem">
    <VStack className={styles.container} gap="16">
      {article.user && <Header name={article.user.name} date={article.createdAt} />}
      <Title title={article.title} />
      <p>{article.title}</p>
      <p>{article.views}</p>
    </VStack>
  </div>
);
