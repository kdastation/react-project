export {
  userReducer,
  userActions,
  MODULE_NAME_USER_SLICE,
} from './model/slice/userSlice';

export type {
  UserData,
  UserSliceState,
} from './model/types/userTypes';

export { rootSelectorUser } from './model/selectors/rootSelectorUser';
