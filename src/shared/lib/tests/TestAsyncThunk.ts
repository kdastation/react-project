import { AsyncThunkAction, Dispatch } from '@reduxjs/toolkit';
import { State } from 'app/providers/StoreProvider/config/storeTypes';

type ActionCreator<Return, Args, RejectedValue> =
    (args: Args) => AsyncThunkAction<Return, Args, { rejectValue: RejectedValue }>

export class TestAsyncThunk <Return, Args, RejectedValue> {
  actionCreator: ActionCreator<Return, Args, RejectedValue>;

  dispatch: Dispatch;

  getState: () => State;

  constructor(actionCreator: ActionCreator<Return, Args, RejectedValue>) {
    this.actionCreator = actionCreator;
    this.dispatch = jest.fn();
    this.getState = jest.fn();
  }

  async callThunk(args: Args) {
    const action = this.actionCreator(args);
    const result = await action(this.dispatch, this.getState, undefined);

    return result;
  }
}
