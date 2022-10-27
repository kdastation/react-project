import { Button } from 'shared/ui/Button';
import { classNames } from 'shared/lib/classNames/classNames';
import styles from './LoginForm.module.scss';

export const LoginForm = () => (
  <div className={classNames(
    styles.container,
  )}
  >
    <input type="text" />
    <input type="text" />
    <Button>Войти</Button>
  </div>
);
