import { FC } from 'react';
import { ArticleTextBlock } from '../../../../model/types/article';

type TextBlockProps = {
  block: ArticleTextBlock
}

export const TextBlock: FC<TextBlockProps> = ({
  block,
}) => (
  <div>
    {block.title && <p>{block.title}</p>}
    {
      block.paragraphs && block.paragraphs.map((paragraph) => (
        <p
          key={paragraph}
        >
          {paragraph}
        </p>
      ))
    }
  </div>
);
