import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserData, UserSliceState } from '../types/userTypes';

export const MODULE_NAME_USER_SLICE = 'user';

const initialState: UserSliceState = {
  userData: null,
};

const userSlice = createSlice({
  name: MODULE_NAME_USER_SLICE,
  initialState,
  reducers: {
    setUserData(state, { payload }: PayloadAction<UserData>) {
      state.userData = payload;
    },
  },
});

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
