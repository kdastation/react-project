import { ReducersMapObject } from '@reduxjs/toolkit';
import { State } from 'app/providers/StoreProvider/config/storeTypes';
import { MODULE_NAME_USER_SLICE, userReducer } from 'entities/User';
import {
  loginByUserNameReducer,
} from 'features/LoginByUserName';

export const rootReducer: ReducersMapObject<State> = {
  [MODULE_NAME_USER_SLICE]: userReducer,
  loginByUserName: loginByUserNameReducer,
};
