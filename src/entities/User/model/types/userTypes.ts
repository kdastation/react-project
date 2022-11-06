export type UserData = {
  id: number,
  username: string
}

export type UserSliceState = {
  userData: UserData | null
}

export const MODULE_NAME_USER_SLICE = 'user';
