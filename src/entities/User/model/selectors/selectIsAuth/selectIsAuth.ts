import { createSelector } from '@reduxjs/toolkit';
import { selectUserData } from '../selectUserData/selectUserData';

export const selectIsAuth = createSelector(
  selectUserData,
  (userData) => Boolean(userData),
);
