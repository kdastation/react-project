import { FC } from 'react';
import { ArticleImageBlock } from '../../../../../model/types/article';

type ImageBlockProps = {
  block: ArticleImageBlock
}

export const ImageBlock: FC<ImageBlockProps> = ({
  block,
}) => (
  <div>
    {block.title && <p>{block.title}</p>}
    <img src={block.src} alt={block.title} />
  </div>
);
