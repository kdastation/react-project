import { ReducersMapObject } from '@reduxjs/toolkit';
import { State } from 'app/providers/StoreProvider/config/storeTypes';
import { MODULE_NAME_USER_SLICE, userReducer } from 'entities/User';
import { MODULE_NAME_EDITABLE_PROFILE_CARD } from 'features/EditableProfileCard';
import {
  editableProfileCardReducer,
} from 'features/EditableProfileCard/model/slice/editableProfileCardSlice';

export const rootReducer: ReducersMapObject<State> = {
  [MODULE_NAME_USER_SLICE]: userReducer,
  [MODULE_NAME_EDITABLE_PROFILE_CARD]: editableProfileCardReducer,
};

export type KeysReducers = keyof ReducersMapObject<State>
