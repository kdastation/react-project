import { Button } from '@/shared/ui/Button';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useSelector } from 'react-redux';
import { TextField } from '@/shared/ui/TextField';
import { login } from '@/features/LoginByUserName/model/async-thunks/login/login';
import {
  DynamicModuleLoader,
  ReducersList,
} from '@/shared/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { FC } from 'react';
import { rootSelectorLoginByUserName } from '../../model/selectors/root';
import {
  loginByUserNameActions,
  loginByUserNameReducer,
} from '../../model/slice/loginByUserNameSlice';
import styles from './LoginForm.module.scss';

const initialReducers: ReducersList = {
  loginByUserName: loginByUserNameReducer,
};

type LoginFormProps = {
  onSuccess?: () => void
}

export const LoginForm: FC<LoginFormProps> = ({
  onSuccess,
}) => {
  const dispatch = useAppDispatch();

  const {
    username,
    password,
  } = useSelector(rootSelectorLoginByUserName.selectFullState);

  const handleChangeUserName = (value: string) => {
    dispatch(loginByUserNameActions.setUserName(value));
  };

  const handleChangePassword = (value: string) => {
    dispatch(loginByUserNameActions.setPassword(value));
  };

  const handleLogin = async () => {
    const result = await dispatch(login({
      username,
      password,
    }));
    if (result.meta.requestStatus === 'fulfilled') {
      onSuccess?.();
    }
  };

  return (
    <DynamicModuleLoader
      reducers={initialReducers}
    >
      <div className={classNames(
        styles.container,
      )}
      >
        <TextField
          onChangeValue={handleChangeUserName}
          value={username}
        />
        <TextField
          onChangeValue={handleChangePassword}
          value={password}
        />
        <Button
          onClick={handleLogin}
        >
          Войти
        </Button>
      </div>
    </DynamicModuleLoader>
  );
};
