export const LOGIN_BY_USER_NAME_SLICE_MODULE_NAME = 'loginByUserName';

export type LoginByUserNameSliceState = {
  username: string,
  password: string,
  isLoading: boolean,
  error: string | null | undefined
}

export type LoginArgs = {
  username: string,
  password: string
}
