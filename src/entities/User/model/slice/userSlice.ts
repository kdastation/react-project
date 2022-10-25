import { createSlice } from '@reduxjs/toolkit';
import { MODULE_NAME_USER_SLICE, UserSliceState } from '../types/userTypes';

const initialState: UserSliceState = {
  isAuth: false,
  userData: null,
};

const userSlice = createSlice({
  name: MODULE_NAME_USER_SLICE,
  initialState,
  reducers: {

  },
});

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
