export type UserData = {
  id: number,
  login: string
}

export type UserSliceState = {
  isAuth: boolean,
  userData: UserData | null
}

export const MODULE_NAME_USER_SLICE = 'user';
