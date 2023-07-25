import { createAsyncThunk } from "@reduxjs/toolkit";

import { ThunkConfig } from "@/app/providers/StoreProvider";

import { MODULE_NAME } from "../consts/moduleName";
import { Music } from "@/entities/Music/model/types/Music";

export const fetchMusics = createAsyncThunk<Music[], void, ThunkConfig<string>>(
  `${MODULE_NAME}/fetchMusics`,
  async (_, thunk) => {
    try {
      const receivedData = await thunk.extra.api.get<Music[]>("/music");

      return receivedData.data;
    } catch (error: any) {
      return thunk.rejectWithValue(error.message);
    }
  },
);
