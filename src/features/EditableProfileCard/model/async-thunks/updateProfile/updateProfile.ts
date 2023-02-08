import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Profile } from 'entities/Profile';
import { selectForm } from 'features/EditableProfileCard/model/selectors/selectForm/selectForm';
import { MODULE_NAME } from '../../consts/moduleName';

export const updateProfile = createAsyncThunk<Profile, void, ThunkConfig<string>>(
  `${MODULE_NAME}/updateProfile`,
  async (data, thunk) => {
    try {
      const formProfile = selectForm(thunk.getState());
      const receivedData = await thunk.extra.api.put('/profile/1', formProfile);

      if (!receivedData.data) {
        throw new Error('Нет данных');
      }

      return receivedData.data;
    } catch (error: any) {
      return thunk.rejectWithValue(error.message);
    }
  },
);
