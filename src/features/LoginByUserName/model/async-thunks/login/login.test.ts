import { userActions, UserData } from '@/entities/User';
import { TestAsyncThunk } from '@/shared/lib/tests/TestAsyncThunk';
import { login } from './login';

describe('login async thunk test', () => {
  test('success login', async () => {
    const userData: UserData = {
      id: 1,
      username: 'qwerty',
    };

    const thunk = new TestAsyncThunk(login);
    thunk.api.post.mockReturnValue(Promise.resolve({ data: userData }));
    const result = await thunk.callThunk({ username: 'qwerty', password: 'qwerty' });
    expect(thunk.api.post).toHaveBeenCalled();
    expect(thunk.dispatch).toHaveBeenCalledWith(userActions.setUserData(userData));
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(thunk.dispatch).toHaveBeenCalledTimes(3);
  });

  test('login with error', async () => {
    const thunk = new TestAsyncThunk(login);
    // eslint-disable-next-line prefer-promise-reject-errors
    thunk.api.post.mockReturnValue(Promise.reject({
      status: 403,
      message: 'error',
    }));
    const result = await thunk.callThunk({ username: 'qwerty', password: 'qwerty' });
    expect(thunk.api.post).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toBe('error');
    expect(thunk.dispatch).toHaveBeenCalledTimes(2);
  });
});
