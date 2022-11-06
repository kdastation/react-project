import { State } from 'app/providers/StoreProvider/config/storeTypes';
import { initialState } from '../../slice/loginByUserNameSlice';

export const selectFullState = ({ loginByUserName }: State) => loginByUserName || initialState;
