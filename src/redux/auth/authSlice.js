import { createSlice } from '@reduxjs/toolkit';
import { initialState } from '@/redux/initialState';
import { persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
// ставим дополнительно npm install localforage - для решения проблемы с localStorege
import localforage from 'localforage';

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

const PersistConfig = {
  key: 'auth',
  // Вот так его используем
  storage: localforage,
};

export const authReducer = persistReducer(PersistConfig, authSlice.reducer);

export const { logIn, logOut } = authSlice.actions;

export const getAuthLoginValue = state => state.auth.login;
export const getAuthIsLoggedInValue = state => state.auth.isLoggedIn;
