import { createAsyncThunk } from '@reduxjs/toolkit';
import { userActions, UserData } from '@/entities/User';
import { LoginArgs } from '@/features/LoginByUserName/model/types/types';
import { ThunkConfig } from '@/app/providers/StoreProvider';

export const login = createAsyncThunk<UserData, LoginArgs, ThunkConfig<string>>(
  'loginByUserName/login',
  async (data, thunk) => {
    try {
      const receivedData = await thunk.extra.api.post('/login', data);

      const userData = receivedData.data;
      thunk.dispatch(userActions.setUserData(userData));
      return userData;
    } catch (error: any) {
      return thunk.rejectWithValue(error.message);
    }
  },
);
