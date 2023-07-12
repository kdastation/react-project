import { FC } from 'react';
import { Code } from '@/shared/ui/Code/ui/Code';
import { ArticleCodeBlock } from '../../../../../model/types/article';

type CodeBlockProps = {
  block: ArticleCodeBlock
}
export const CodeBlock: FC<CodeBlockProps> = ({
  block,
}) => (
  <div>
    <div>
      <Code
        code={block.code}
      />
    </div>
  </div>
);
