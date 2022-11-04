import { UserSliceState } from 'entities/User';
import { LoginByUserNameSliceState } from 'features/LoginByUserName/index';

export type State = {
  user: UserSliceState,
  loginByUserName: LoginByUserNameSliceState
}
