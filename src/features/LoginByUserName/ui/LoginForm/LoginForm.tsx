import { Button } from 'shared/ui/Button';
import { classNames } from 'shared/lib/classNames/classNames';
import { useDispatch, useSelector } from 'react-redux';
import { TextField } from 'shared/ui/TextField';
import { login } from 'features/LoginByUserName/model/async-thunks/login/login';
import {
  DynamicModuleLoader,
  ReducersList,
} from 'shared/components/DynamicModuleLoader/DynamicModuleLoader';
import { rootSelectorLoginByUserName } from '../../model/selectors/root';
import {
  loginByUserNameActions,
  loginByUserNameReducer,
} from '../../model/slice/loginByUserNameSlice';
import styles from './LoginForm.module.scss';

const initialReducers: ReducersList = {
  loginByUserName: loginByUserNameReducer,
};

export const LoginForm = () => {
  const dispatch = useDispatch();

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

  const handleLogin = () => {
    dispatch(login({
      username,
      password,
    }));
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
