import { FC, useEffect } from 'react';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { CommentList } from '@/entities/Comment';
import { useSelector } from 'react-redux';
import {
  fetchArticleComments,
} from '../../model/async-thunks/fetchArticleComments/fetchArticleComments';
import { selectorArticleComments } from '../../model/slice/articleCommentsSlice';

type ArticleCommentsListProps = {
  articleId: string
}

export const ArticleCommentsList: FC<ArticleCommentsListProps> = ({
  articleId,
}) => {
  const dispatch = useAppDispatch();
  const comments = useSelector(selectorArticleComments.selectAll);

  useEffect(() => {
    dispatch(fetchArticleComments({ articleId }));
  }, [articleId]);

  return (
    <div>
      <CommentList
        comments={comments}
      />
    </div>
  );
};
