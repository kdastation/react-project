import { selectUserId } from './selectUserId/selectUserId';
import { selectIsAuth } from './selectIsAuth/selectIsAuth';
import { selectUserData } from './selectUserData/selectUserData';

export const rootSelectorUser = {
  selectIsAuth,
  selectUserData,
  selectUserId,
};
