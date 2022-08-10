import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import axios from '../../axios';

export const fetchAuth = createAsyncThunk('/auth/fetchAuth', async (params) => {
  const { data } = await axios.post('/auth/login', params);
  return data;
});

export const fetchUser = createAsyncThunk('/auth/me', async () => {
  const { data } = await axios.get('/auth/me');
  return data;
});

const initialState = {
  data: null,
  status: 'loading',
};

const authSlice = createSlice({
  name: 'auth',
  initialState,

  reducers: {
    logout: (state) => {
      state.data = null;
      window.localStorage.removeItem('token');
    },
  },
  extraReducers: {
    [fetchAuth.pending]: (state) => {
      state.status = 'loading';
    },
    [fetchAuth.fulfilled]: (state, action) => {
      state.status = 'loaded';
      state.data = action.payload;
    },
    [fetchAuth.rejected]: (state) => {
      state.status = 'error';
      state.data = [];
    },

    [fetchUser.pending]: (state) => {
      state.status = 'loading';
    },
    [fetchUser.fulfilled]: (state, action) => {
      state.status = 'loaded';
      state.data = action.payload;
    },
    [fetchUser.rejected]: (state) => {
      state.status = 'error';
      state.data = [];
    },
  },
});

export const isAuthUser = (state) => {
  const data = state.auth.data;
  if (data !== null && data.length !== 0) {
    return true;
  }
};

export const authReducer = authSlice.reducer;

export const { logout } = authSlice.actions;
