import { FC } from "react";
import { Article } from "@/entities/Article";
import styles from "./ArticleItem.module.scss";

type ArticleItemProps = {
  article: Article;
};

export const ArticleItem: FC<ArticleItemProps> = ({ article }) => (
  <div className={styles.container}>
    Card Article {article.id}
    <p>{article.title}</p>
    <p>{article.views}</p>
  </div>
);
