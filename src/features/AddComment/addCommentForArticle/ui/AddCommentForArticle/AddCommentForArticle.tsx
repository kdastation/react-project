import { FC } from 'react';
import { AddCommentForm } from '@/features/AddComment';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import {
  addCommentForArticle,
} from '../../model/async-thunks/addCommentForArticle/addCommentForArticle';

type AddCommentForArticleProps = {
  articleId: string
}

export const AddCommentForArticle: FC<AddCommentForArticleProps> = ({
  articleId,
}) => {
  const dispatch = useAppDispatch();

  const handleAddComment = (text: string) => {
    dispatch(addCommentForArticle({
      text,
      articleId,
    }));
  };

  return (
    <div>
      <p>Добавить коментарий к статье</p>
      <AddCommentForm
        onSubmit={handleAddComment}
      />
    </div>
  );
};
