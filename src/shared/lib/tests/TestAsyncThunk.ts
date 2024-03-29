import { AsyncThunkAction, Dispatch } from '@reduxjs/toolkit';
import axios, { AxiosInstance } from 'axios';
import { State } from '@/app/providers/StoreProvider/config/storeTypes';

type ActionCreator<Return, Args, RejectedValue> =
    (args: Args) => AsyncThunkAction<Return, Args, { rejectValue: RejectedValue }>

jest.mock('axios');

const mockedAxios = jest.mocked(axios, true);

export class TestAsyncThunk <Return, Args, RejectedValue> {
  actionCreator: ActionCreator<Return, Args, RejectedValue>;

  dispatch: Dispatch;

  getState: () => State;

  api: jest.MockedFunctionDeep<AxiosInstance>;

  navigate: jest.MockedFn<any>;

  constructor(
    actionCreator: ActionCreator<Return, Args, RejectedValue>,
    state?: DeepPartial<State>,
  ) {
    this.actionCreator = actionCreator;
    this.dispatch = jest.fn();
    this.getState = jest.fn(() => state as State);

    this.api = mockedAxios;
    this.navigate = jest.fn();
  }

  async callThunk(args: Args) {
    const action = this.actionCreator(args);
    const result = await action(this.dispatch, this.getState, {
      api: this.api,
      navigate: this.navigate,
    });

    return result;
  }
}
