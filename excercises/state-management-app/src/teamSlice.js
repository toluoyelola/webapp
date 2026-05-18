import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// 1. The Thunk
export const fetchUsers = createAsyncThunk('team/fetchUsers', async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  if (!response.ok) throw new Error('Failed to fetch users');
  return response.json();
});

const teamSlice = createSlice({
  name: 'team',
  // 2. The State Structure
  initialState: {
    users: [],
    status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null
  },
  reducers: {},
  // 3. Extra Reducers
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.users = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  }
});

export default teamSlice.reducer;