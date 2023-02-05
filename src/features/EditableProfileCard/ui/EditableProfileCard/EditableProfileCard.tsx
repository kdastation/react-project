import { FC, useEffect } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { DynamicModuleLoader } from 'shared/components/DynamicModuleLoader/DynamicModuleLoader';
import {
  editableProfileCardReducer,
} from 'features/EditableProfileCard/model/slice/editableProfileCardSlice';
import {
  fetchProfile,
} from '../../model/async-thunks/fetchProfile/fetchProfile';

const initialReducers = {
  editableProfileCard: editableProfileCardReducer,
};

export const EditableProfileCard: FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProfile());
  }, []);

  return (
    <DynamicModuleLoader reducers={initialReducers}>
      <div>
        profile
      </div>
    </DynamicModuleLoader>
  );
};
