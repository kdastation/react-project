import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Profile } from 'entities/Profile';
import { MODULE_NAME } from '../../consts/moduleName';

export const fetchProfile = createAsyncThunk<Profile, { id: string | number }, ThunkConfig<string>>(
  `${MODULE_NAME}/fetchProfile`,
  async ({ id }, thunk) => {
    try {
      const receivedData = await thunk.extra.api.get(`/profile/${id}`);

      if (!receivedData.data) {
        throw new Error('Нет данных');
      }

      return receivedData.data;
    } catch (error: any) {
      return thunk.rejectWithValue(error.message);
    }
  },
);
