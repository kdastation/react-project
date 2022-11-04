import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { MODULE_NAME_USER_SLICE, UserData, UserSliceState } from '../types/userTypes';

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
