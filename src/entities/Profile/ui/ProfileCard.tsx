import { FC } from 'react';
import { TextField } from '@/shared/ui/TextField';
import { Profile } from '../model/types/profile';

type ProfileCardProps = {
  profile: Profile,
  onChangeName: (value: string) => void,
  onChangeLastname: (value: string) => void
}

export const ProfileCard: FC<ProfileCardProps> = ({
  profile,
  onChangeLastname,
  onChangeName,
}) => (
  <div>
    <div>
      <TextField
        value={profile.name}
        onChangeValue={onChangeName}
      />
    </div>
    <div>
      <TextField
        value={profile.lastName}
        onChangeValue={onChangeLastname}
      />
    </div>
  </div>
);
