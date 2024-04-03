import { FC } from "react";
import { useSelector } from "react-redux";

import { login } from "@/features/LoginByUserName/model/async-thunks/login/login";
import {
  DynamicModuleLoader,
  ReducersList,
} from "@/shared/components/DynamicModuleLoader/DynamicModuleLoader";
import { classNames } from "@/shared/lib/classNames/classNames";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch";
import { Button } from "@/shared/ui/Button";
import { TextField } from "@/shared/ui/TextField";

import { rootSelectorLoginByUserName } from "../../model/selectors/root";
import {
  loginByUserNameActions,
  loginByUserNameReducer,
} from "../../model/slice/loginByUserNameSlice";
import styles from "./LoginForm.module.scss";

const initialReducers: ReducersList = {
  loginByUserName: loginByUserNameReducer,
};

type LoginFormProps = {
  onSuccess?: () => void;
};

export const LoginForm: FC<LoginFormProps> = ({ onSuccess }) => {
  const dispatch = useAppDispatch();

  const { username, password } = useSelector(rootSelectorLoginByUserName.selectFullState);

  const handleChangeUserName = (value: string) => {
    dispatch(loginByUserNameActions.setUserName(value));
  };

  const handleChangePassword = (value: string) => {
    dispatch(loginByUserNameActions.setPassword(value));
  };

  const handleLogin = async () => {
    const result = await dispatch(
      login({
        username,
        password,
      }),
    );
    if (result.meta.requestStatus === "fulfilled") {
      onSuccess?.();
    }
  };

  return (
    <DynamicModuleLoader reducers={initialReducers}>
      <div className={classNames(styles.container)}>
        <TextField
          data-testid="UsernameInput"
          onChangeValue={handleChangeUserName}
          value={username}
        />
        <TextField
          data-testid="PasswordInput"
          onChangeValue={handleChangePassword}
          value={password}
        />
        <Button data-testid="SumbitLoginButton" onClick={handleLogin}>
          asdasdasdsadasdasdasda
        </Button>
      </div>
    </DynamicModuleLoader>
  );
};
