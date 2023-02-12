import { FC, useEffect } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { useSelector } from 'react-redux';
import { CodeBlock } from './Blocks/CodeBlock/CodeBlock';
import { ImageBlock } from './Blocks/ImageBlock/ImageBlock';
import { TextBlock } from './Blocks/TextBlock/TextBlock';
import { fetchArticle } from '../../model/async-thunks/fetchArticle/fetchArticle';
import { selectArticle } from '../../model/selectors/selectArticle/selectArticle';
import { ArticleBlock, ArticleBlockTypes } from '../../../model/types/article';

type ArticleCardProps = {
  id: string
}

export const ArticleCard: FC<ArticleCardProps> = ({
  id,
}) => {
  const article = useSelector(selectArticle);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchArticle({ id }));
  }, [id]);

  const renderBlock = (block: ArticleBlock) => {
    switch (block.type) {
    case ArticleBlockTypes.CODE:
      return (
        <CodeBlock
          block={block}
        />
      );
    case ArticleBlockTypes.IMAGE:
      return (
        <ImageBlock
          block={block}
        />
      );
    case ArticleBlockTypes.TEXT:
      return (
        <TextBlock
          block={block}
        />
      );
    default:
      return null;
    }
  };

  if (!article) {
    return null;
  }

  return (
    <div>
      <h1>{article.title}</h1>
      {article.blocks.map(renderBlock)}
    </div>
  );
};
