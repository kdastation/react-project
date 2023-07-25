import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "@/app/providers/StoreProvider";
import { Id } from "@/shared/types/Id";

import { MODULE_NAME } from "../consts/moduleName";

type Args = {
  musicId: Id;
};

export const deleteMusic = createAsyncThunk<void, Args, ThunkConfig<string>>(
  `${MODULE_NAME}/deleteMusic`,
  // eslint-disable-next-line consistent-return
  async (args, thunk) => {
    try {
      await thunk.extra.api.delete(`/music/${args.musicId}`);
    } catch (error: any) {
      return thunk.rejectWithValue(error.message);
    }
  },
);
