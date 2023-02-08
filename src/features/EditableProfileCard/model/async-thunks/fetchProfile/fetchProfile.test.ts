import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk';
import { fetchProfile } from './fetchProfile';

const data = {
  name: 'Denis',
  lastname: 'Markin',
};

describe('fetch profile async thunk test', () => {
  test('success fetch profile', async () => {
    const thunk = new TestAsyncThunk(fetchProfile);
    thunk.api.get.mockReturnValue(Promise.resolve({ data }));
    const result = await thunk.callThunk({ id: 1 });
    expect(thunk.api.get).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toEqual(data);
  });

  test('error fetch profile', async () => {
    const thunk = new TestAsyncThunk(fetchProfile);
    thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));
    const result = await thunk.callThunk({ id: 1 });
    expect(thunk.api.get).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('rejected');
  });
});
