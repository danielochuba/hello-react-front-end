import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
/* eslint-disable no-param-reassign */
export const fetchMessage = createAsyncThunk(
  'message/fetchMessage',
  async () => {
    try {
      const response = await fetch('http://localhost:3000/messages');
      const data = await response.json();
      return data;
    } catch (error) {
      console.log(error);
    } return null;
  },

);

const initialState = {
  message: '',
  status: null,
};

const messageSlice = createSlice({
  name: 'message',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      fetchMessage.pending, (state) => {
        state.status = 'loading';
      },
    );
    builder.addCase(
      fetchMessage.rejected, (state) => {
        state.status = 'failed';
      },
    );
    builder.addCase(
      fetchMessage.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.message = action.payload.text;
      },
    );
  },
});

export default messageSlice.reducer;
