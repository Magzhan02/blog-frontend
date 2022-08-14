import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import axios from '../../axios';

export const getPosts = createAsyncThunk('posts/getPosts', async () => {
  const { data } = await axios.get('/posts');
  return data;
});

export const deletePost = createAsyncThunk('posts/deletePost', (id) => {
  axios.delete(`/posts/${id}`);
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

    //delete post
    [deletePost.pending]: (state, action) => {
      state.posts.items = state.posts.items.filter((obj) => obj._id !== action.meta.arg);
    },
  },
});

export const postsReducer = postsSlice.reducer;
