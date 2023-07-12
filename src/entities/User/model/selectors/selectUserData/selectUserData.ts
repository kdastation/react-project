import { State } from '@/app/providers/StoreProvider/config/storeTypes';

export const selectUserData = ({ user }: State) => user.userData;
