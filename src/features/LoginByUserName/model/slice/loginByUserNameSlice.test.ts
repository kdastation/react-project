import { DeepPartial } from '@reduxjs/toolkit';
import { LoginByUserNameSliceState } from '../types/types';
import {
  loginByUserNameActions,
  initialState,
  loginByUserNameReducer,
} from './loginByUserNameSlice';

describe('loginByUserNameSlice tests', () => {
  test('should correctly work setUserName action', () => {
    const state: DeepPartial<LoginByUserNameSliceState> = { username: 'qwert' };

    expect(loginByUserNameReducer(
         state as LoginByUserNameSliceState,
         loginByUserNameActions.setUserName('123'),
    )).toEqual({ username: '123' });
  });

  test('should correctly work setPassword action', () => {
    const state: DeepPartial<LoginByUserNameSliceState> = { password: 'qwerty' };

    expect(loginByUserNameReducer(
            state as LoginByUserNameSliceState,
            loginByUserNameActions.setPassword('123'),
    )).toEqual({ password: '123' });
  });

  test('should correctly work with empty state', () => {
    expect(loginByUserNameReducer(
      undefined,
      loginByUserNameActions.setPassword('123'),
    )).toEqual({
      ...initialState,
      password: '123',
    });
  });
});
