import {
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit';
import { login } from 'features/LoginByUserName/model/async-thunks/login/login';
import {
  LOGIN_BY_USER_NAME_SLICE_MODULE_NAME,
  LoginByUserNameSliceState,
} from '../types/types';

const initialState: LoginByUserNameSliceState = {
  username: '',
  password: '',
  isLoading: false,
  error: null,
};

export const loginByUserNameSlice = createSlice({
  name: LOGIN_BY_USER_NAME_SLICE_MODULE_NAME,
  initialState,
  reducers: {
    setUserName(state, { payload }: PayloadAction<string>) {
      state.username = payload;
    },
    setPassword(state, { payload }: PayloadAction<string>) {
      state.password = payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(login.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(login.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    });
    builder.addCase(login.fulfilled, (state, { payload }) => {
      state.isLoading = false;
    });
  },
});

export const { actions: loginByUserNameActions } = loginByUserNameSlice;
export const { reducer: loginByUserNameReducer } = loginByUserNameSlice;
