import { createSelector } from '@reduxjs/toolkit';
import { selectUserData } from '@/entities/User/model/selectors/selectUserData/selectUserData';

export const selectUserId = createSelector(
  selectUserData,
  (userData) => userData?.id,
);
