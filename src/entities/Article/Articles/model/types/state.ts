import { EntityState } from "@reduxjs/toolkit";
import { Article } from "@/entities/Article";

export type ArticlesState = EntityState<Article> & {
  isLoading: boolean;
  isLoadingMore: boolean;
  error: string | null | undefined;
  next: string | null;
};
