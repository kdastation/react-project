import axios from 'axios';
import { userActions, UserData } from 'entities/User';
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk';
import { login } from './login';

jest.mock('axios');

const mockedAxios = jest.mocked(axios, true);

describe('login async thunk test', () => {
  test('success login', async () => {
    const userData: UserData = {
      id: 1,
      username: 'qwerty',
    };
    mockedAxios.post.mockReturnValue(Promise.resolve({ data: userData }));
    const thunk = new TestAsyncThunk(login);
    const result = await thunk.callThunk({ username: 'qwerty', password: 'qwerty' });
    expect(mockedAxios.post).toHaveBeenCalled();
    expect(thunk.dispatch).toHaveBeenCalledWith(userActions.setUserData(userData));
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(thunk.dispatch).toHaveBeenCalledTimes(3);
  });

  test('login with error', async () => {
    // eslint-disable-next-line prefer-promise-reject-errors
    mockedAxios.post.mockReturnValue(Promise.reject({
      status: 403,
      message: 'error',
    }));
    const thunk = new TestAsyncThunk(login);
    const result = await thunk.callThunk({ username: 'qwerty', password: 'qwerty' });
    expect(mockedAxios.post).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toBe('error');
    expect(thunk.dispatch).toHaveBeenCalledTimes(2);
  });
});
