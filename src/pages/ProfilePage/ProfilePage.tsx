import { EditableProfileCard } from "@/features/EditableProfileCard";

export const ProfilePage = () => {
  const id = 1;

  return (
    <div data-testid="ProfilePage">
      PROFILE PAGE
      <EditableProfileCard id={id} />
    </div>
  );
};
