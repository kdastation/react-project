import { TestAsyncThunk } from '@/shared/lib/tests/TestAsyncThunk';
import { updateProfile } from './updateProfile';

const data = {
  name: 'Denis',
  lastname: 'Markin',
};

describe('update profile async thunk test', () => {
  test('success update profile', async () => {
    const thunk = new TestAsyncThunk(updateProfile, {
      editableProfileCard: {
        form: data,
      },
    });
    thunk.api.put.mockReturnValue(Promise.resolve({ data }));
    const result = await thunk.callThunk();
    expect(thunk.api.put).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toEqual(data);
  });

  test('error update profile', async () => {
    const thunk = new TestAsyncThunk(updateProfile, {
      editableProfileCard: {
        form: data,
      },
    });
    thunk.api.put.mockReturnValue(Promise.resolve({ status: 403 }));
    const result = await thunk.callThunk();
    expect(thunk.api.put).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('rejected');
  });
});
