import { FC } from 'react';
import { Comment } from '../../model/types/comment';

type CommentCardProps = {
  comment:Comment
}

export const CommentCard: FC<CommentCardProps> = ({
  comment,
}) => {
  const a = 1;
  return (
    <div>
      <p>{comment.text}</p>
      <p>{comment.user}</p>
    </div>
  );
};
