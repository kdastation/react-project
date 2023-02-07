import { EditableProfileCard } from 'features/EditableProfileCard';

export const ProfilePage = () => {
  const id = 1;

  return (
    <div>
      PROFILE PAGE
      <EditableProfileCard
        id={id}
      />
    </div>
  );
};
