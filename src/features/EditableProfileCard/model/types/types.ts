import { Profile } from 'entities/Profile';

export type EditableProfileCardSliceState = {
  profile: Profile | null,
  form: Profile | null,
  readonly: boolean,
  isLoading: boolean,
  error: string | null | undefined
}
