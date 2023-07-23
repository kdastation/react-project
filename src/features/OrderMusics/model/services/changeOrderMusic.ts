import { createAsyncThunk } from "@reduxjs/toolkit";

import { ThunkConfig } from "@/app/providers/StoreProvider";

import { MODULE_NAME } from "../consts/moduleName";

type Args = {
  musicId1: number;
  musicId2: number;
};

export const changeOrderMusic = createAsyncThunk<unknown, Args, ThunkConfig<string>>(
  `${MODULE_NAME}/changeOrderMusic`,
  async (data, thunk) => {
    try {
      const receivedData = await thunk.extra.api.put("/music/order", data);

      return receivedData.data;
    } catch (error: any) {
      return thunk.rejectWithValue(error.message);
    }
  },
);
