import { createSlice } from '@reduxjs/toolkit';
import { EditableProfileCardSliceState } from 'features/EditableProfileCard/model/types/types';
import {
  fetchProfile,
} from 'features/EditableProfileCard/model/async-thunks/fetchProfile/fetchProfile';
import { MODULE_NAME } from '../consts/moduleName';

const initialState: EditableProfileCardSliceState = {
  profile: null,
  error: null,
  isLoading: false,
  readonly: false,
  form: null,
};

export const editableProfileCardSlice = createSlice({
  name: MODULE_NAME,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProfile.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(fetchProfile.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.error = null;
      state.profile = payload;
      state.form = payload;
    });
    builder.addCase(fetchProfile.rejected, (state, { payload }) => {
      state.isLoading = true;
      state.error = payload;
    });
  },
});

export const { reducer: editableProfileCardReducer } = editableProfileCardSlice;
export const { actions: editableProfileCardActions } = editableProfileCardSlice;
