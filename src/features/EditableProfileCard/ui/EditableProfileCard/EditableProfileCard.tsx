import { FC, useEffect } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { DynamicModuleLoader } from 'shared/components/DynamicModuleLoader/DynamicModuleLoader';
import {
  editableProfileCardActions,
  editableProfileCardReducer,
} from 'features/EditableProfileCard/model/slice/editableProfileCardSlice';
import { useSelector } from 'react-redux';
import { selectForm } from 'features/EditableProfileCard/model/selectors/selectForm/selectForm';
import { ProfileCard } from 'entities/Profile';
import { Button } from 'shared/ui/Button';
import {
  updateProfile,
} from 'features/EditableProfileCard/model/async-thunks/updateProfile/updateProfile';
import {
  fetchProfile,
} from '../../model/async-thunks/fetchProfile/fetchProfile';

// TODO: Пофиксить
const initialReducers = {
  editableProfileCard: editableProfileCardReducer,
};

type EditableProfileCardProps = {
  id: string | number
}

export const EditableProfileCard: FC<EditableProfileCardProps> = ({
  id,
}) => {
  const dispatch = useAppDispatch();
  const form = useSelector(selectForm);

  useEffect(() => {
    dispatch(fetchProfile({ id }));
  }, []);

  const handleChangeName = (name: string) => {
    dispatch(editableProfileCardActions.updateProfile({
      name,
    }));
  };

  const handleChangeLastname = (lastName: string) => {
    dispatch(editableProfileCardActions.updateProfile({
      lastName,
    }));
  };

  const handleSaveChanges = () => {
    dispatch(updateProfile());
  };

  if (!form) return null;

  return (
    <div>
      profile
      <ProfileCard
        profile={form}
        onChangeName={handleChangeName}
        onChangeLastname={handleChangeLastname}
      />
      <Button
        onClick={handleSaveChanges}
      >
        Save
      </Button>
    </div>
  );
};
