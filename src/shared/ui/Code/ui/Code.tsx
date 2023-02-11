import { FC } from 'react';
import { Button } from 'shared/ui/Button';
import styles from './Code.module.scss';

type CodeProps = {
  code: string
}

export const Code: FC<CodeProps> = ({
  code,
}) => {
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
  };

  return (
    <div className={styles.container}>
      <Button
        onClick={handleCopy}
      >
        Копировать
      </Button>
      <pre>
        <code>
          {code}
        </code>
      </pre>
    </div>
  );
};
