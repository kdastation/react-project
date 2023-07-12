import { State } from '@/app/providers/StoreProvider/config/storeTypes';

export const selectForm = (
  { editableProfileCard }: State,
) => editableProfileCard?.form || null;
