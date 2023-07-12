import { State } from '@/app/providers/StoreProvider/config/storeTypes';

export const selectArticle = ({ article } : State) => article?.article;
