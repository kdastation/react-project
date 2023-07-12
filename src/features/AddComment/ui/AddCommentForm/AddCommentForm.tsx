import { FC, FormEvent, useState } from 'react';
import { Button } from '@/shared/ui/Button';
import { TextField } from '@/shared/ui/TextField';

type AddCommentFormProps = {
  onSubmit: (text: string) => void
}

export const AddCommentForm: FC<AddCommentFormProps> = ({
  onSubmit,
}) => {
  const [text, setText] = useState('');

  const handleChangeText = (value: string) => {
    setText(value);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(text);
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
      >
        <TextField
          onChangeValue={handleChangeText}
        />
        <Button
          type="submit"
        >
          Добавить
        </Button>
      </form>
    </div>
  );
};
