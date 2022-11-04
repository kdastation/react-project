import { createAsyncThunk } from '@reduxjs/toolkit';
import { userActions, UserData } from 'entities/User';
import { LoginArgs } from 'features/LoginByUserName/model/types/types';
import axios from 'axios';

export const login = createAsyncThunk<UserData, LoginArgs, {rejectValue: string}>(
  'loginByUserName/login',
  async (data, ThunkApi) => {
    try {
      const receivedData = await axios.post<UserData>('http://localhost:8000/login', data);

      const userData = receivedData.data;
      ThunkApi.dispatch(userActions.setUserData(userData));
      return userData;
    } catch (error) {
      return ThunkApi.rejectWithValue(error.message);
    }
  },
);
