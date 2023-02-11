import { FC, useEffect } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { fetchArticle } from 'entities/Article/model/async-thunks/fetchArticle/fetchArticle';

type ArticleCardProps = {
  id: string
}

export const ArticleCard: FC<ArticleCardProps> = ({
  id,
}) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchArticle({ id }));
  }, [id]);

  return <div>article</div>;
};
