import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import axios from '../../axios';

export const getPosts = createAsyncThunk('posts/getPosts', async () => {
  const { data } = await axios.get('/posts');
  return data;
});

const initialState = {
  posts: {
    items: [],
    status: 'loading',
  },
};

const postsSlice = createSlice({
  name: 'posts',
  initialState,

  reducers: {},
  extraReducers: {
    [getPosts.pending]: (state) => {
      state.posts.status = 'loading';
    },
    [getPosts.fulfilled]: (state, action) => {
      state.posts.status = 'loaded';
      state.posts.items = action.payload;
    },
    [getPosts.rejected]: (state) => {
      state.posts.status = 'error';
      state.posts.items = [];
    },
  },
});

export const postsReducer = postsSlice.reducer;
