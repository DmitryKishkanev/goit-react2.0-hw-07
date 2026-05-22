import { createSlice } from '@reduxjs/toolkit';
import { initialState } from '@/redux/initialState';

export const authSlice = createSlice({
  name: 'auth',
  initialState: initialState.auth,

  reducers: {
    logIn(state, action) {
      state.login = action.payload;
      state.isLoggedIn = true;
    },
    logOut(state) {
      state.login = '';
      state.isLoggedIn = false;
    },
  },
});

export const authReducer = authSlice.reducer;

export const { logIn, logOut } = authSlice.actions;

export const getAuthLoginValue = state => state.auth.login;
export const getAuthIsLoggedInValue = state => state.auth.isLoggedIn;
