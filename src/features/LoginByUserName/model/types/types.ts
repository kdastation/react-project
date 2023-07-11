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
