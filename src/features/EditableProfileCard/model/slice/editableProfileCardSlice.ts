import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { EditableProfileCardSliceState } from '@/features/EditableProfileCard/model/types/types';
import {
  fetchProfile,
} from '@/features/EditableProfileCard/model/async-thunks/fetchProfile/fetchProfile';
import { Profile } from '@/entities/Profile';
import {
  updateProfile,
} from '@/features/EditableProfileCard/model/async-thunks/updateProfile/updateProfile';
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
  reducers: {
    updateProfile(state, { payload }: PayloadAction<DeepPartial<Profile>>) {
      if (state.form) {
        state.form = {
          ...state.form,
          ...payload,
        };
      }
    },
  },
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

    builder.addCase(updateProfile.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(updateProfile.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.profile = payload;
    });
    builder.addCase(updateProfile.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    });
  },
});

export const { reducer: editableProfileCardReducer } = editableProfileCardSlice;
export const { actions: editableProfileCardActions } = editableProfileCardSlice;
