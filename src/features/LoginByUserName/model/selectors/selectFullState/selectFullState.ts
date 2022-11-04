import { State } from 'app/providers/StoreProvider/config/storeTypes';

export const selectFullState = ({ loginByUserName }: State) => loginByUserName;
