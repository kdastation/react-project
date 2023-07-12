import { Comment } from '@/entities/Comment/model/types/comment';
import { FC } from 'react';
import { CommentCard } from '@/entities/Comment/ui/CommentCard/CommentCard';

type CommentListProps = {
  comments: Comment[]
}

export const CommentList: FC<CommentListProps> = ({
  comments,
}) => (
  <div>
    {comments.map((comment) => (
      <CommentCard
        comment={comment}
        key={comment.id}
      />
    ))}
  </div>
);
